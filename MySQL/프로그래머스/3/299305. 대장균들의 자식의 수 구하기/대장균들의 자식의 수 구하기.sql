-- 코드를 작성해주세요
SELECT ECOLI1.ID, IFNULL(ECOLI2.CHILD_COUNT, 0) AS CHILD_COUNT
FROM ECOLI_DATA ECOLI1 LEFT OUTER JOIN (SELECT E1.ID, COUNT(*) AS CHILD_COUNT
                                        FROM ECOLI_DATA E1, ECOLI_DATA E2
                                        WHERE E1.ID = E2.PARENT_ID
                                        GROUP BY 1) AS ECOLI2
    ON ECOLI1.ID = ECOLI2.ID
ORDER BY 1;
