import React from 'react'

const Title = ({title1,title2,titleStyles,title1Styles, paraStyles}) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${title1Styles} text-[25px] leading-tight md:text-[35px] md:leading-[1.3] mb-4 font-bold`}>{title1} <span className='text-[#217041] !font-light'>{title2}</span></h2>
    <p className={`${paraStyles} hidden`}>Our food products are crafted with the finest ingredients to deliver exceptional taste and quality.</p>
    </div>
  )
}

export default Title
