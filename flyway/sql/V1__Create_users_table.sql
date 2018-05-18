
create table USERS
(
  ID serial,
  USERNAME varchar(100) NOT NULL UNIQUE,
  FIRST_NAME varchar(100) NOT NULL,
  LAST_NAME varchar(100) NOT NULL,
  PASSWORD text NOT NULL
);