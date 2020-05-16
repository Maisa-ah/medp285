window.onload=function(){

  var first = document.getElementById("select1");
  var second = document.getElementById("select2");
  var third = document.getElementById("select3");
  var forth = document.getElementById("select4");

  var button = document.getElementById("button");

  
  var select_1 = [
    "I like",
    "I hate",
    "I love",
    "I don't"
  ];
  
  var select_2 = [
    "banana",
    "onions",
    "apples",
    "fruits"
  ];
  
  var select_3 = [
    "using natural light",
    "using all available lighting",
    "using candles",
    "using electricity"
  ];
  
  var select_4 = [
    "always together",
    "not really",
    "maybe",
    "feeling"
  ];
  
  function select_random(x){
    y = x[Math.floor(Math.random()*x.length)];
    return y;
  }
  
  function generate(){
    var select_one = select_random(select_1);
    var select_two = select_random(select_2);
    var select_three = select_random(select_3);
    var select_four = select_random(select_4);

    first.innerHTML = select_one;
    second.innerHTML = select_two;
    third.innerHTML =  select_three;
    forth.innerHTML = select_four;
  }

  document.getElementById('button').onclick =function(){
    // console.log('click');
    generate();
  };
  generate();
}