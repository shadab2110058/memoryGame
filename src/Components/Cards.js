import React from 'react'
import "./Cards.css"
import Card from './Card'
import react,{useState} from "react"
const Cards = () => {
  const [items,setItem] = useState([

    { id:1,img:'./img/kiwi.jpg',stat:'' },
    { id:1,img:'./img/kiwi.jpg',stat:'' },
    { id:2,img:'./img/watermelon.jpg',stat:'' },
    { id:2,img:'./img/watermelon.jpg',stat:'' },
    { id:3,img:'./img/lemon.jpg',stat:'' },
    { id:3,img:'./img/lemon.jpg',stat:'' },
    { id:4,img:'./img/guava.webp',stat:'' },
    { id:4,img:'./img/guava.webp',stat:'' },
    { id:5,img:'./img/papaya.jpg',stat:'' },
    { id:5,img:'./img/papaya.jpg',stat:'' },
    { id:6,img:'./img/anar.jpg',stat:'' },
    { id:6,img:'./img/anar.jpg',stat:'' },
    { id:7,img:'./img/dates.jpg',stat:'' },
    { id:7,img:'./img/dates.jpg',stat:'' },
    { id:8,img:'./img/lichi.webp',stat:'' },
    { id:8,img:'./img/lichi.webp',stat:'' },
    { id:9,img:'./img/cheeku.jpg',stat:'' },
    { id:9,img:'./img/cheeku.jpg',stat:'' },
    { id:10,img:'./img/jamun.webp',stat:'' },
    { id:10,img:'./img/jamun.webp',stat:'' },
    { id:11,img:'./img/shahtoot.jpg',stat:'' },
    { id:11,img:'./img/shahtoot.jpg',stat:'' },
    { id:12,img:'./img/strawberry.jpg',stat:'' },
    { id:12,img:'./img/strawberry.jpg',stat:'' },
    { id:13,img:'./img/mango.jpg',stat:'' },
    { id:13,img:'./img/mango.jpg',stat:'' },
    { id:14,img:'./img/pineapple.png',stat:'' },
    { id:14,img:'./img/pineapple.png',stat:'' },
    { id:15,img:'./img/orange.png',stat:'' },
    { id:15,img:'./img/orange.png',stat:'' },
    { id:16,img:'./img/grapes.png',stat:'' },
    { id:16,img:'./img/grapes.png',stat:'' },
    { id:17,img:'./img/banana.png',stat:'' },
    { id:17,img:'./img/banana.png',stat:'' },
    { id:18,img:'./img/apple.jpg',stat:'' },
    { id:18,img:'./img/apple.jpg',stat:'' }

  ].sort(()=>Math.random()-0.9))

   const [prev,setPrev] = useState(-1)

   function check(current){
    
      if(items[current].id===items[prev].id)
      {
        items[current].stat="correct";
        items[prev].stat="correct";
        setItem([...items])
        setPrev(-1);
      }
      else{
        setItem([...items])
        items[current].stat="wrong";
        items[prev].stat="wrong";
        
        setTimeout(()=>{
          items[current].stat="";
          items[prev].stat="";
          setItem([...items])
         setPrev(-1);
        },1000)
        
      }
   }
    
  const handleClick=(id)=>{
    setItem([...items])
    items[id].stat = 'active';
    if(prev===-1){
      
      setPrev(id);
    }
    else{
       check(id);
    }
  }

  return (
    <div className='main'>
        <div className='container'>
            { items.map((item,index )=>(
            <Card key={index} item={item} id={index} handleClick={handleClick}/>
            )) } 
        </div>
    </div>
  )
}

export default Cards
