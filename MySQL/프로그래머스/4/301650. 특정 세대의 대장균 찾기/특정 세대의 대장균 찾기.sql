-- 코드를 작성해주세요
SELECT e3.id
FROM ecoli_data e1
         JOIN ecoli_data e2
              ON e1.id = e2.parent_id
         JOIN ecoli_data e3
              ON e2.id = e3.parent_id
WHERE e1.parent_id IS NULL