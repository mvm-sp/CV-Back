Create Table CVOwner(
	id serial not null,
	Name varchar(200) not null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (id)
);

insert into CVOwner(Name) values('Marcelo Marcondes');

Create table CVLanguage(
	id serial not null,
	Name varchar(15) not null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone	,
	primary key (id)
);

insert into CVLanguage(Name) values('Portuguese');
insert into CVLanguage(Name) values('English');

Create table CVObjective(
	IdOwner int not null,
	IdLanguage int not null,
	Description varchar(300) not null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (IdOwner,IdLanguage),
	FOREIGN KEY (IdOwner) references CVOwner(id),
	FOREIGN KEY (IdLanguage) references CVLanguage(id)
);

Create table CVContact(
	IdOwner int not null,
	Address varchar(500) not null,
	City	varchar(100) not null,
	State	char(2) not null,
	ZipCode varchar(10),
	Email	varchar(200) not null,
	Phone	varchar(15) not null,
	URLLinkedin varchar(200) null,
	URLGithub varchar(200) null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (IdOwner),
	FOREIGN KEY (IdOwner) references CVOwner(id)
);

Create Table CVHistory(
	id serial not null,
	IdOwner int not null,
	IdLanguage int not null,
	Role varchar(100) not null,
	Company varchar(100) not null,
	PeriodBegin char(7) not null,
	PeriodEnd char(7)  null,
	Description text null,
	Notes varchar(500) null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (Id),
	FOREIGN KEY (IdOwner) references CVOwner(id),
	FOREIGN KEY (IdLanguage) references CVLanguage(id)	
);

Create Table CVEducation(
	id serial not null,
	IdOwner int not null,
	IdLanguage int not null,
	Title varchar(100) not null,
	School varchar(100) not null,
	PeriodBegin char(7) not null,
	PeriodEnd char(7)  null,
	Description varchar(2000) null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (Id),
	FOREIGN KEY (IdOwner) references CVOwner(id),
	FOREIGN KEY (IdLanguage) references CVLanguage(id)	
);

Create table CVSkillType(
	id serial not null,
	Name varchar(15) not null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone	,
	primary key (id)
);


insert into CVSkillType(Name) values('Database');
insert into CVSkillType(Name) values('Programing');
insert into CVSkillType(Name) values('Language');

Create Table CVSkill(
	id serial not null,
	IdOwner int not null,
	IdSkillType int not null,
	Name varchar(100) not null,
	Level smallint not null,
	active boolean NOT NULL DEFAULT true,
    createdat timestamp with time zone NOT NULL DEFAULT now(),
    updatedat timestamp with time zone,
	primary key (Id),
	FOREIGN KEY (IdOwner) references CVOwner(id),
	FOREIGN KEY (IdSkillType) references CVSkillType(id)	
);
