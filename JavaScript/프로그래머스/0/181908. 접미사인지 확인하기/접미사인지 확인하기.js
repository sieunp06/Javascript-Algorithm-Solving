function solution(my_string, is_suffix) {
    const MY_STRING_LENGTH = my_string.length;
    const SUFFIX_LENGTH = is_suffix.length;
    
    if (my_string.substring(MY_STRING_LENGTH - SUFFIX_LENGTH, MY_STRING_LENGTH) === is_suffix) {
        return 1;
    }    
    return 0;
}