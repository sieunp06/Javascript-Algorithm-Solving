function solution(sizes) {
    var maxWidth = 0;
    var maxHeight = 0;
    
    for (const size of sizes) {
        const width = Math.min(size[0], size[1]);
        const height = Math.max(size[0], size[1]);
        
        if (maxWidth < width) {
            maxWidth = width;
        }
        if (maxHeight < height) {
            maxHeight = height;
        }
    }
    
    return maxWidth * maxHeight;
}