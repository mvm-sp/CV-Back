CREATE OR REPLACE FUNCTION prGetcvowner(pid int)
RETURNS TABLE (id int4, name varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, name, active, createdat, updatedat
	from cvowner
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvowner(pname varchar)
RETURNS void AS $$
BEGIN	
	insert into cvowner(name) values (pname);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvowner(pId int4, pname varchar, pactive bool)
RETURNS void AS $$
begin
	update cvowner 
	set name = pname, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvowner(pid int)
RETURNS void AS $$
begin
	delete from cvowner 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;