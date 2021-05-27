CREATE OR REPLACE FUNCTION prGetcvhistory(pid int)
RETURNS TABLE (id int4, idowner int4, idlanguage int4, role varchar, company varchar, periodbegin bpchar, periodend bpchar, description text, notes varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, idowner, idlanguage, role, company, periodbegin, periodend, description, notes, active, createdat, updatedat
	from cvhistory
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvhistory(pidowner int4, pidlanguage int4, prole varchar, pcompany varchar, pperiodbegin bpchar, pperiodend bpchar, pdescription text, pnotes varchar)
RETURNS void AS $$
BEGIN	
	insert into cvhistory(idowner, idlanguage, role, company, periodbegin, periodend, description, notes) values (pidowner, pidlanguage, prole, pcompany, pperiodbegin, pperiodend, pdescription, pnotes);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvhistory(pId int4, pidowner int4, pidlanguage int4, prole varchar, pcompany varchar, pperiodbegin bpchar, pperiodend bpchar, pdescription text, pnotes varchar, pactive bool)
RETURNS void AS $$
begin
	update cvhistory 
	set idowner = pidowner, idlanguage = pidlanguage, role = prole, company = pcompany, periodbegin = pperiodbegin, periodend = pperiodend, description = pdescription, notes = pnotes, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvhistory(pid int)
RETURNS void AS $$
begin
	delete from cvhistory 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION public.prgetjsoncvcontent(pidOwner integer, pidLanguage integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$
DECLARE
   basic json;
   history json;
BEGIN
	SELECT row_to_json(base) INTO basic from  
	(SELECT 
		O."name" , 
		B.description ,
		C.address , 
		C.city , 
		C.state , 
		C.zipcode , 
		C.email , 
		C.phone ,
		C.urllinkedin, 
		C.urlgithub 
	FROM cvowner  O
	INNER JOIN cvcontact C
	ON O.id = C.idowner 
	INNER JOIN cvobjective B 
	ON O.id = B.idowner 
	AND B.idlanguage = pidLanguage
	WHERE O.id = pidOwner) base;
	
	SELECT JSON_AGG(tab) INTO history from  
	( SELECT  
	     "role",
	     company,
	     periodbegin,
	     periodend,
	     description,
	     notes
	  FROM cvhistory 
	  WHERE idowner = pidOwner
	  AND idlanguage = pidlanguage
	  ORDER BY to_date( RIGHT(periodbegin ,4) ||'-' || left(periodbegin,2) || '-01', 'YYYY-MM-DD') DESC,to_date( RIGHT(periodend,4) ||'-' || left(periodend,2) || '-01', 'YYYY-MM-DD') DESC
	 ) tab  ;

	


    -- Build the JSON Response:
    RETURN 
    (SELECT json_build_object(
    'basic',basic,
    'history', history,
    'education', '',
    'certificates','',
    'skils',''));
   
end; 
$function$
;
