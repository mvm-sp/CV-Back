CREATE OR REPLACE FUNCTION prGetcvskill(pid int)
RETURNS TABLE (id int4, idowner int4, idskilltype int4, name varchar, level int2, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, idowner, idskilltype, name, level, active, createdat, updatedat
	from cvskill
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvskill(pidowner int4, pidskilltype int4, pname varchar, plevel int2)
RETURNS void AS $$
BEGIN	
	insert into cvskill(idowner, idskilltype, name, level) values (pidowner, pidskilltype, pname, plevel);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvskill(pId int4, pidowner int4, pidskilltype int4, pname varchar, plevel int2, pactive bool)
RETURNS void AS $$
begin
	update cvskill 
	set idowner = pidowner, idskilltype = pidskilltype, name = pname, level = plevel, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvskill(pid int)
RETURNS void AS $$
begin
	delete from cvskill 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;