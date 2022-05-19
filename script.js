/*Create the divs using JavaScript. Don’t try making them by 
hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div 
(which can go directly in your HTML).
There are several different ways to make the divs appear as a grid 
(versus just one on each line). Feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid
Be careful with borders and margins, as they can adjust the size 
of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” pane to see if the elements have actually 
shown up but are somehow hidden.
Go willy-nilly and add console.log statements in
 your JavaScript to see if it’s actually being loaded.


 */

/*  //create element

 let newDiv = docuemnt.createElement('div');

 //add class
 newDiv.className = 'grid';

 //add id
 newDiv.id= 'h1';

 //add atribute
 newDiv.setAttribute('title',"hello");

 // create text node
 let newDivText = document.createTextNode('hello world');

 //add text .div
 newDiv.appendChild(newDivText);

 let container = document.querySelector('header .container')
 let h1=document.querySelector('header h1');

 container.insertBefore(newDiv, h1); */


let container = document.getElementById('container');

 for(i=0; i <256; i++){
    let newDiv = document.createElement('div');
    newDiv.className= "div" + i;
    container.appendChild(newDiv);
  newDiv.style.border = "1px solid black";
 newDiv.style.height='25px';
 newDiv.style.width='25px';
  
  
 newDiv.addEventListener("mouseover", function (e) {
      newDiv.className ="h";}, false)
  
  
 };
 let size =0;
 let newHeightWidth=0;
 let newDivAmount=0;

 
 const adjust=document.getElementById('adjust');
 adjust.addEventListener('click', function(){
      size = prompt('Select length and height of grid')
      document.getElementById('container').innerHTML = "";
      newHeightWidth= 432 / size - 2;
     newDivAmount= size * size;
     
 
     
        for(j=0;j<newDivAmount; j++){
            let newDiv = document.createElement('div');
            newDiv.style.height=newHeightWidth+'px';
  newDiv.style.width=newHeightWidth+'px';
  newDiv.style.border = "1px solid black";
    newDiv.className= "div" + j;
    container.appendChild(newDiv);
    
    newDiv.addEventListener("mouseover", function (e) {
      newDiv.className ="h";}, false)
 
        } 
    


    
    });

    /* having issue with container class vs id and getting it to work*/

    /* function newContainer(){
        for(j=0;j<newDivAmount; j++){
            let newDiv = document.createElement('div');
    newDiv.className= "div" + i;
    container[0].appendChild(newDiv);
  newDiv.style.border = "1px solid black";
  newDiv.style.height=newHeightWidth+'px';
  newDiv.style.width=newHeightWidth+'px';

 newDiv.addEventListener("mouseover", function (e) {
    newDiv.className ="h";}, false)


        } 


    }*/

 
/*  

for prompt = 8  432/8  == 54 px height/ width
for prompt = 100  432/100 = 4.32 px height/width 



*/



 //add a button that resets grid and then allows grid to be same total width but 
 //flex calculator ?


 // should be away to take a prompt and multiply/divide to fit it into correct 
 // layout .. css grid might be needed
 
// still need to make this grid 16 by 16 but
//want to be able to have a hover or click option to change colors of div


/* children.addEventListener("click", function( event ) {
    // highlight the mouseenter target
    event.children.style.backgroundColor = "black";}) */