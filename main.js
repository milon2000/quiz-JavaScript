function addPoint()
      {
var points = 0;
for(var i = 1; i <= 15; i++) {
  var r = document.getElementsByName('answer'+i);
  for(var j = 0; j < r.length; j++) {
    var radio = r[j];
    if(radio.value == "1" && radio.checked) {
      points++;
    }

  }
}

        if (points >= 3) {
          document.getElementById('here').innerHTML='Yes!';
        } else {document.getElementById('here').innerHTML='No!';}
  }
