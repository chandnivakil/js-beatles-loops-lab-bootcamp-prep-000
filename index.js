

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  } 
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do array.push("I love the Beatles!")
  i++;
} while (number < 15)
  }
}



var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);

 