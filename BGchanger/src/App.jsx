import { useState } from 'react'

var i=0;
let intervalId;

const colors = [
  "#F3F4F6", // Light Gray
  "#E0F2FE", // Soft Blue
  "#FFF8E7", // Cream
  "#D1FAE5", // Mint Green
  "#EDE9FE", // Lavender
  "#FFE5D9", // Peach
  "#FCE7F3", // Light Pink
  "#FEF9C3", // Pale Yellow
  "#E5E7EB", // Silver Gray
  "#D6EAF8", // Sky Blue
  "#FDEBD0", // Light Orange
  "#D5F5E3", // Sea Green
  "#EBDEF0", // Soft Purple
  "#FCF3CF", // Light Gold
  "#F9EBEA", // Rose White
];

function App(){
  const [judgement, decision] = useState(false);
  function AutomaticChanger(){
    clearInterval(intervalId)
 intervalId = setInterval(ChangeColor, 500)
  decision(true)
}

function Stop (){
  decision(false)
  clearInterval(intervalId)
}
return(
<div className="container">
 
  <>
<h1>
  BackGround Changer
</h1>
<br />
   <button onClick={ChangeColor}>Change</button>
   <br /> <br />
   <button id='AC' onClick={AutomaticChanger}>Automatic Changer</button>
   <br /> <br />
   {
    judgement &&
    <button id='stop' onClick={Stop}>Stop</button>
   }

  </>

</div>
)

}


function ChangeColor(){
  var color=colors[i]
  
    i = (i + 1) % colors.length;
  
  document.body.style.backgroundColor = color;
}





export default App;