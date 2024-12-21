import React from 'react'

const Watches = () => {
  const watchData = [
    
     
      {id:1, name:"Rolax", prize:80, description:"luxury watches", img:"/images (4).jpg"},
      {id:2, name:"Rolax", prize:70, description:"luxury watches", img:"/download (1).jpg"},
      {id:3, name:"Rolax", prize:60, description:"luxury watches", img:"/download (2).jpg"},
      {id:4, name:"Rolax", prize:50, description:"luxury watches", img:"/download (3).jpg"},
      {id:5, name:"Rolax", prize:40, description:"luxury watches", img:"/images.jpg"},
      {id:6, name:"Rolax", prize:100, description:"luxury watches", img:"/download.jpg"}, 

  ]
  return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
<div key={watch.id} className='watch-card'>
  <img src={watch.img} alt={watch.name} />
  <h3>{watch.name}</h3>
  <p>{watch.description}</p>
  <div className='prize'>${watch.prize}</div>
  <button>Add to Card</button>
  

     </div>
        
        ))}
      </div>

    </div>
  )
}

export default Watches
