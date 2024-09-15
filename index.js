import react from "react"
import reactdom from "react-dom/client"
import "./style.css"

import one from "./assets/images/ronaldo1.jpg"
import two from "./assets/images/ronaldo2.jpg"
import three from "./assets/images/ronaldo3.jpg"
import four from "./assets/images/ronaldo4.jpg"
import five from "./assets/images/ronaldo5.jpg"
import six from "./assets/images/ronaldo6.jpg"
import seven from "./assets/images/ronaldo7.jpg"
import eight from "./assets/images/ronaldo8.jpg"
import nine from "./assets/images/ronaldo9.jpg"

const root = reactdom.createRoot(document.getElementById("root"))

function Pics(props){
  return(
    <div>
      <div className="card">
        
        <div>
            
            <img src={props.image} alt="ronaldo" className="" ></img>
            <h2 className="text">{props.bio}</h2>
        </div>
    </div>
    </div>
  )
}

var gallery = [
  {
    image:one,
    bio:"Ronaldo at madird"
  },
  {
    image:two,
    bio:"Ronaldo in national team"
  },
  {
    image:three,
    bio:"Ronaldo at madrid"
  },
  {
    image:four,
    bio:"Ronaldo at madrid"
  },
  {
    image:five,
    bio:"Ronaldo at madrid"
  },
  {
    image:six,
    bio:"Ronaldo at juventus"
  },
  {
    image:seven,
    bio:"Ronaldo at Al-nasser"
  },
  {
    image:eight,
    bio:"Ronaldo at united"
  },
  {
    image:nine,
    bio:"Ronaldo winning Best player award"
  },


]


root.render(
  <div id="container" className="cardcomp">

    

{
    gallery.map(function(item)
   {
    return <Pics image ={item.image} bio = {item.bio}></Pics>
   })
}
</div>
)
