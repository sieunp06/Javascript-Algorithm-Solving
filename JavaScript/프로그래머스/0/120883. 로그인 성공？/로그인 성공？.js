function solution(id_pw, db) {
    for (const input of db) {
        const inputId = input[0];
        const inputPw = input[1];
        
        if (id_pw[0] === inputId && id_pw[1] === inputPw) {
            return 'login';
        }
        if (id_pw[0] === inputId) {
            return 'wrong pw';
        }
    }
    return 'fail';
}