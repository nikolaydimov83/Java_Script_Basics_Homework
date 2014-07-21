function replacer(value) {

    var a=value.split(' ');
    a = value.replace("<a", "[URL");
    while(a.indexOf("<a")!==-1){
        a=a.replace("<a", "[URL");
    }
    while (a.indexOf("</a>") !== -1) {
        a = a.replace("</a>", "[/URL]");
    }
    var b = [];
    for (var j = 0; j < a.length; j++) {
        if (a[j]!=="["||a[j+1]!=="U")
        {
            b.push(a[j])
        }
        else {

            do {
                
                if (a[j]===">")
                {
                    b.push("]")
                   
                    break
                }
                else {
                    b.push(a[j])
                }
                if (j === a.length - 1) {
                    break;
                }
                j++
                
            }
            while(true)
        }
    }

    b = b.join('');
    return b;
}

console.log(replacer('<ul>\
 <li>\
  <a href=http://softuni.bg>SoftUni</a>\
 </li>\
<a href=http://softuni.bg>SoftUni</a>\
</ul>\
<a href=http://softuni.bg>SoftUni</a>\
'

))
