import React , {useState, useEffect}from 'react'


const Note = ({id,date,text,handleDelete}) => {

const [color,setColor] = useState(["#98AFC7","#98AF", "#D5D6aA" ,"#bec742","#beca","#215c56","#21425c","#745a75","#745","#a14d6f"])

  useEffect(()=>{
    const randomColor = Math.floor(Math.random()*color.length);
    const bgColor = color[randomColor];
    setColor(bgColor)
  },[color])
  return (
    <div className='overall-notes'>
    <div className='notes-container' style={{backgroundColor:color}}>
      <div className='span-div'><span className='text-span'>{text}</span></div>
      <small className='date'>{date}</small>
        
      <button onClick={()=>handleDelete(id)} className="delete-btn">
      {/* <img src='https://cdn-icons-png.flaticon.com/512/8037/8037146.png'
            alt='del'
            height="20px"
            width="20px"/> */}
             &#10006;
      </button>
    
    
    </div>
    <br></br>
    
    </div>
    
  )
}

export default Note