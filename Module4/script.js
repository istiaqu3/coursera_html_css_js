(function (window) {

var names = ["Yousuf", "jamal", "Jeny", "Jessore", "Pal", "Fraun", "Larry", "Pala", "Tomarmatha", "Jim"];


for (var i in names) {

 
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);