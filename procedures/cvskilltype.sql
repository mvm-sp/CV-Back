CREATE OR REPLACE FUNCTION prGetcvskilltype(pid int)
RETURNS TABLE (id int4, name varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, name, active, createdat, updatedat
	from cvskilltype
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvskilltype(pname varchar)
RETURNS void AS $$
BEGIN	
	insert into cvskilltype(name) values (pname);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvskilltype(pId int4, pname varchar, pactive bool)
RETURNS void AS $$
begin
	update cvskilltype 
	set name = pname, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvskilltype(pid int)
RETURNS void AS $$
begin
	delete from cvskilltype 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;