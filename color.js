var Links = {
  setColor(color){
    var a = document.querySelectorAll('a');
    var i = 0
    while(i < a.length){
      a[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
function NightDayHandler(me){
  if(me.value === 'day'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    me.value='night';
    document.querySelector('h1').style.borderBottom = 'solid black 3px';
    document.querySelector('ul').style.borderRight = 'solid black 3px';

    Links.setColor('black');
  }

  else{
    Body.setBackgroundColor('black');
    Body.setColor('white');
    me.value='day';
    document.querySelector('h1').style.borderBottom = 'solid white 3px';
    document.querySelector('ul').style.borderRight = 'solid white 3px';

    Links.setColor('white');
  }
}
