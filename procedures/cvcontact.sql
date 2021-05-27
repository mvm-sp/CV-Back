CREATE OR REPLACE FUNCTION prGetcvcontact(pid int)
RETURNS TABLE (idowner int4, address varchar, city varchar, state bpchar, zipcode varchar, email varchar, phone varchar, urllinkedin varchar, urlgithub varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select idowner, address, city, state, zipcode, email, phone, urllinkedin, urlgithub, active, createdat, updatedat
	from cvcontact
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcvcontact(pidowner int4, paddress varchar, pcity varchar, pstate bpchar, pzipcode varchar, pemail varchar, pphone varchar, purllinkedin varchar, purlgithub varchar)
RETURNS void AS $$
BEGIN	
	insert into cvcontact(idowner, address, city, state, zipcode, email, phone, urllinkedin, urlgithub) values (pppppppppidowner, address, city, state, zipcode, email, phone, urllinkedin, urlgithub);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcvcontact(pId int4, pidowner int4, paddress varchar, pcity varchar, pstate bpchar, pzipcode varchar, pemail varchar, pphone varchar, purllinkedin varchar, purlgithub varchar, pactive bool)
RETURNS void AS $$
begin
	update cvcontact 
	set idowner = pidowner, address = paddress, city = pcity, state = pstate, zipcode = pzipcode, email = pemail, phone = pphone, urllinkedin = purllinkedin, urlgithub = purlgithub, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecvcontact(pid int)
RETURNS void AS $$
begin
	delete from cvcontact 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;