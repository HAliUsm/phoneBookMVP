

DROP TABLE IF EXISTS business CASCADE;
CREATE TABLE business(
 id            serial,
 business_name varchar(50) PRIMARY KEY,
 phone_number  bigint NOT NULL,
 address       text NOT NULL,
 owner_name    text NOT NULL
);

INSERT INTO business(business_name, phone_number, address, owner_name) VALUES
('Step UP llc', 3957357765, 'Baltimore school ln, dreamy TX, 76957', 'Halimat Usman'), 
('Infiltration 4 U llc', 5968764986, 'Movies Screens, Italy TX, 75463', 'Enzo Gorlomi, Antonio Magheriti, Dominic Decoco'),
('Snowed IN survial llc', 9785674584, 'Last up dr, Hunter WY, 69586', 'Major Marquis Warren, Dasiy Domergue'),
('Ride Free llc', 3884638697, 'Ellis Brittle down, Old MS, 49576', 'Django, Dr. King Shultz');


DROP TABLE IF EXISTS owners; 
CREATE TABLE owners(
 id           serial PRIMARY KEY,
 name         varchar(50) NOT NULL,
 phone_number bigint NOT NULL,
 address      text NOT NULL,
business_name varchar(50) NOT NULL
);

INSERT INTO owners(name, phone_number, address, business_name) VALUES 
('Halimat Usman', 8323314670, 'Bouncy drive, dreamy TX', 'Step UP llc'),  
('Dominic Decoco', 3976502563, 'Assistant Drive, Italy TX, 75463', 'Infiltration 4 U llc'), 
('Enzo Gorlomi', 5896673229, 'Stunt Street Italy, TX, 75463 ', 'Infiltration 4 U llc'),
('Antonio Magheriti', 9672418095,'Carmera Ln, Italy TX, 75463', 'Infiltration 4 U llc'), 
('Major Marquis Warren', 6879027856,'Winter bounty, Hunter WY, 69586', 'Snowed IN survial llc' ),
('Dasiy Domergue', 3856597053, 'Prisoner chained, Hunter WY', 'Snowed IN survial llc'), 
('Django', 5968456392, 'Unchained street, Old MS, 49576','Ride Free llc' ), 
('Dr. King Shultz', 3957508556, 'German bounty, hunter MS, 46492', 'Ride Free llc');


