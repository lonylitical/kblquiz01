const quest1=

  {
   prashn:'which is the hottest planet in our solar system?',
   options: {
              a:'a:mars',
              b:'b:venus',
              c:'c:mercury',
              d:'d:saturn'
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
    res.style.display = "block";
}

function check()  
{
 var choice=(prompt(" type your choice")) ;
 for(i=0;i == 0;i++)
 {
 
  if( choice == quest1.uttar )
    {
    score= 5;
    res.innerHTML= "you win rs.5000" + " and your score= " + score;
    cong.innerHTML = "&#x1f600";
    next2.style.display = "block";
    }
   else    
   {
    score=0;
    res.innerHTML="oops! wrong answer" + " and your score= " + score;
    cong.innerHTML = "&#x1f61e";
   }
   i++;
 }
}