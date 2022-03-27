select 
  regiao as 'Região',
  sum(populacaco) as Total
from estados
group by regiao
order by Total desc;

select 
  avg(populacaco) as Total
from estados;