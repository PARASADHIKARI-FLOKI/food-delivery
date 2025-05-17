import React from 'react'

const Item = ({food}) => {
  return (
    <div>
      <div>
        {/* photo */}
        <div>
            <img src={food.image} alt="" height={155} width={155} className='object-contain aspect-square rounded-xl'/>
        </div>
        
      </div>
    </div>
  )
}

export default Item
