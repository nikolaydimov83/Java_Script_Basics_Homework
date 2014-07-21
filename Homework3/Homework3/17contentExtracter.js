function extractContent(value) {
    document.write(value);
    var all = document.getElementsByTagName("*");
    var str = '';

    str=document.getElementsByTagName('html')[0].innerText;

    str = str.replace(/\r?\n|\r/g,"")
    return str;
}

console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"))