CREATE OR REPLACE FUNCTION prGetcvobjective(pidowner int, pidlanguage int)
RETURNS TABLE (idowner int4, idlanguage int4, description varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select idowner, idlanguage, description, active, createdat, updatedat
	from cvobjective
	where (idowner = pidowner and pidlanguage = idlanguage);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prGetAllcvobjective()
RETURNS TABLE (idowner int4, idlanguage int4, description varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select idowner, idlanguage, description, active, createdat, updatedat
	from cvobjective;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvobjective(pidowner int4, pidlanguage int4, pdescription varchar)
RETURNS void AS $$
BEGIN	
	insert into cvobjective(idowner, idlanguage, description) values (pidowner, pidlanguage, pdescription);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvobjective(pId int4, pidowner int4, pidlanguage int4, pdescription varchar, pactive bool)
RETURNS void AS $$
begin
	update cvobjective 
	set idowner = pidowner, idlanguage = pidlanguage, description = pdescription, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvobjective(pid int)
RETURNS void AS $$
begin
	delete from cvobjective 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;