-- 코드를 작성해주세요
SELECT b.id, b.genotype, a.genotype parent_genotype
FROM ecoli_data a
         JOIN ecoli_data b
              ON a.id = b.parent_id AND a.genotype & b.GENOTYPE = a.GENOTYPE