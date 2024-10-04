-- 코드를 작성해주세요
WITH GRADE AS (
    SELECT ID, 
    CASE 
        WHEN SKILL_CODE & (
            SELECT CODE 
            FROM SKILLCODES 
            where name = 'Python') != 0 
            AND 
                (SELECT COUNT(*)   
                 FROM SKILLCODES 
                 WHERE SKILL_CODE & CODE != 0 
                    and 
                        CATEGORY = 'Front End') >= 1 THEN 'A' 
        WHEN SKILL_CODE & (
                SELECT CODE 
                FROM SKILLCODES
                WHERE NAME = 'C#') >= 1 THEN 'B'
        WHEN (SELECT COUNT(*)
              FROM SKILLCODES
              WHERE SKILL_CODE & CODE != 0 
                        AND 
                    CATEGORY = 'Front End') >= 1 THEN 'C' 
        ELSE  'D'
    END GRADE 
    FROM DEVELOPERS 
)
SELECT G.GRADE, G.ID, D.EMAIL
FROM GRADE G JOIN DEVELOPERS D
ON G.ID = D.ID 
WHERE G.GRADE != 'D'
ORDER BY 1, 2;