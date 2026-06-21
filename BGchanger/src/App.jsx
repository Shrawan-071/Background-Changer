import { useState } from 'react'

var i=0;
let intervalId;

const colors = [
  "#F3F4F6", "#E0F2FE", "#FFF8E7", "#D1FAE5", "#EDE9FE",
  "#FFE5D9", "#FCE7F3", "#FEF9C3", "#E5E7EB", "#D6EAF8",
  "#FDEBD0", "#D5F5E3", "#EBDEF0", "#FCF3CF", "#F9EBEA",
  "#F0F9FF", "#F0FDF4", "#FFF7ED", "#FEF2F2", "#F5F3FF",
  "#ECFDF5", "#FDF2F8", "#F8FAFC", "#FAF5FF", "#F0FDFA",
  "#FFEDD5", "#FEF3C7", "#DBEAFE", "#DCFCE7", "#EDE9FE",
  "#FFE4E6", "#CCFBF1", "#F1F5F9", "#E2E8F0", "#F8FAFC",
  "#FFF1F2", "#FEFCE8", "#ECFCCB", "#CFFAFE", "#E0E7FF",
  "#F3E8FF", "#FAE8FF", "#FFE4E6", "#F0ABFC", "#DDD6FE",
  "#BFDBFE", "#BAE6FD", "#A7F3D0", "#BBF7D0", "#FDE68A",
  "#FCD34D", "#FDBA74", "#FDA4AF", "#F9A8D4", "#D8B4FE",
  "#C4B5FD", "#93C5FD", "#7DD3FC", "#67E8F9", "#5EEAD4",
  "#86EFAC", "#BEF264", "#FDE047", "#FACC15", "#FB923C",
  "#FB7185", "#F472B6", "#E879F9", "#C084FC", "#A5B4FC",
  "#60A5FA", "#38BDF8", "#22D3EE", "#2DD4BF", "#4ADE80",
  "#A3E635", "#FDE047", "#FBBF24", "#FB923C", "#F87171",
  "#FB7185", "#EC4899", "#D946EF", "#A855F7", "#8B5CF6",
  "#6366F1", "#3B82F6", "#0EA5E9", "#06B6D4", "#14B8A6",
  "#10B981", "#84CC16", "#EAB308", "#F59E0B", "#F97316"
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