-- 코드를 입력하세요
SELECT CONCAT('/home/grep/src/', U1.BOARD_ID, '/', FILE_ID, FILE_NAME, FILE_EXT) AS FILE_PATH
FROM USED_GOODS_FILE U1 JOIN (SELECT BOARD_ID
                          FROM USED_GOODS_BOARD
                          ORDER BY VIEWS DESC
                          LIMIT 1) U2
    ON U1.BOARD_ID = U2.BOARD_ID
ORDER BY FILE_ID DESC;