var string = "Hello World";
function cut(line){
    if(line.length>3){
        new_line = line.substring(line.length-3,line.length);
        string_needed = new_line+line+new_line;
    }
     return string_needed;
}
console.log(cut(string));