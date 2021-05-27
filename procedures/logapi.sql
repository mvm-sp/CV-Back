CREATE OR REPLACE FUNCTION prGetlogapi(pid int)
RETURNS TABLE (id int4, dsurl varchar, dsrequest varchar, dsresponse varchar, dsemailuser varchar, dtlog timestamptz) AS $$
	select id, dsurl, dsrequest, dsresponse, dsemailuser, dtlog
	from logapi
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostlogapi(pdsurl varchar, pdsrequest varchar, pdsresponse varchar, pdsemailuser varchar, pdtlog timestamptz)
RETURNS void AS $$
BEGIN	
	insert into logapi(dsurl, dsrequest, dsresponse, dsemailuser, dtlog) values (pppppdsurl, dsrequest, dsresponse, dsemailuser, dtlog);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutlogapi(pId int4, pdsurl varchar, pdsrequest varchar, pdsresponse varchar, pdsemailuser varchar, pdtlog timestamptz)
RETURNS void AS $$
begin
	update logapi 
	set dsurl = pdsurl, dsrequest = pdsrequest, dsresponse = pdsresponse, dsemailuser = pdsemailuser, dtlog = pdtlog , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletelogapi(pid int)
RETURNS void AS $$
begin
	delete from logapi 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;