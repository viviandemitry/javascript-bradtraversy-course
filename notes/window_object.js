//WINDOW METHODS / OBJECTS / PROPERTIES

console.log(123); // 123

// Pop up alert
alert('Hello World');

//Pop up with alert + prompt
const input = prompt();
alert(input);

//Confirm (to make sure, to confirm the step)
if(confirm('Are you sure?')){ // once you click in confirm, this alert appears to you and once you click confirm again, display yes in the console.
  console.log('Yes');
} else {
  console.log('NO'); 
} 

//Outer height and width (it counts the whole display
val = window.outer.Height;
val = window.outer.Width;

//Inner height and width (it counts the display where you are working on size.
val = window.innerHeight;
val = window.innerWidth;

//Scroll points (about the scroll bar)
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.hostname;
val = window.port;
val = window.href;
val = window.search;

//Redirect
window.location.href = 'http://google.com';

//Reload
window.location.reload();

//History Object
window.histor.go(-1); // Shows the last website you had visited. (-2, would be the one before the last)

//Navigator Object
val = window.navigatior; // type of browser, version, and other information about you are using in the browser
val = window.appName;
val = window.appVersion;
val = window.userAgent;
val = window.platform;
val = window.vendor;
val = window.language;

console.log(val);




