import "./styles.css";

// function ReadCookie() {
//   var allcookies = document.cookie;
//     console.log ("All Cookies : " + allcookies.length );

//     var cookievalue = escape("Bruce Gifford");
//     document.cookie = "name=" + cookievalue;
//     console.log ("All Cookies after: " + allcookies.length );
// Get all the cookies pairs in an array
// cookiearray = allcookies.split(';');

// // Now take key value pair out of this array
// for(var i=0; i<cookiearray.length; i++) {
//    name = cookiearray[i].split('=')[0];
//    value = cookiearray[i].split('=')[1];
//    document.write ("Key is : " + name + " and Value is : " + value);
// }
// }

document.getElementById("app").innerHTML = `
<h1>Javascript Sandbox</h1>
<div>
</div>
`;
