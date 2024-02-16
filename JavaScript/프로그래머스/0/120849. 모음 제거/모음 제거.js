function solution(my_string) {
    var list = ['a', 'e', 'i', 'o', 'u'];
    
    for (var i = 0; i < list.length; i++) {
        my_string = my_string.replaceAll(list[i], "");
    }
    
    return my_string;
}