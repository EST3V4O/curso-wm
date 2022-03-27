create table if not exists cidades (
  id int unsigned not null auto_increment,
  nome varchar(255) not null,
  estado_id int unsigned not null,
  aread decimal(10,2),
  primary key (id),
  foreign key (estado_id) references estados (id)
);

-- create table if not exists teste (
--   id int unsigned not null auto_increment primary key
-- );

-- drop table if exists teste;