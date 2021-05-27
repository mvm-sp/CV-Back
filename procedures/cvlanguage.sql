CREATE OR REPLACE FUNCTION prGetcvlanguage(pid int)
RETURNS TABLE (id int4, name varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, name, active, createdat, updatedat
	from cvlanguage
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvlanguage(pname varchar)
RETURNS void AS $$
BEGIN	
	insert into cvlanguage(name) values (pname);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvlanguage(pId int4, pname varchar, pactive bool)
RETURNS void AS $$
begin
	update cvlanguage 
	set name = pname, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvlanguage(pid int)
RETURNS void AS $$
begin
	delete from cvlanguage 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;