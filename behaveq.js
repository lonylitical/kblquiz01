const quest1=

  {
   prashn:'Agar koi baccha Narendra Modi jaisa banna chahta hai to wo kya banna chahta hai?',
   options: {
              a:'writer',
              b:'polititian',
              c:'Actor',
              d:'player'
            } ,
    uttar:'b'
  };


const dis=document.querySelector("#dis");
const dispq=document.querySelector("#dispq");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const res=document.querySelector("#res");
const cong=document.querySelector("#cong");


dispq.addEventListener('click',display);
function display()
{
    dispq.innerHTML="Good Morning Questions " ;
  	dis.innerHTML= quest1.prashn;
  	btn1.innerHTML= quest1.options.a;
  	btn2.innerHTML= quest1.options.b;
  	btn3.innerHTML= quest1.options.c;
  	btn4.innerHTML= quest1.options.d;
    cong.innerHTML= "WE FEEL";
}

function check(value)
{
  var choice=this.value;
  return choice;
}

function submit()
{
  var i=0;
  var score=0;
  while(i== 0)
   {
      var answer=check();
     if(answer == quest1.uttar)
      {
      score= 5;
      res.innerHTML= "you win rs.5000" + " and you score " + score;
      cong.innerHTML = "&#x1f600";
      }
     else  
      {
      score=0;
      res.innerHTML="oops! wrong answer" + " and you score " + score;
      cong.innerHTML = "&#x1f61e";
      }
     i++;
   }
}