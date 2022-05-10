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


const container = document.getElementsByClassName('container');

 for(i=0; i <16; i++){
    let newDiv = document.createElement('div');
    newDiv.className= "div" + i;
    container[0].appendChild(newDiv);
  newDiv.style.border = "1px solid black";
  newDiv.style.width= "20px";
  newDiv.style.height="20px";
 }
 