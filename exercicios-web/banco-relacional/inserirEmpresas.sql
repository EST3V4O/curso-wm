alter table empresas modify cnpj varchar(14);

insert into empresas
  (nome, cnpj)
values 
  ('Bradesco', 1234),
  ('Vale', 6789),
  ('Cielo', 1092);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

insert into empresas_unidades
  (empresa_id, cidade_id, sede)
values
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);