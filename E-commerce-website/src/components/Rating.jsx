import React from 'react'

const Rating = ( value, text) => {
  return (
   <div className='rating'>
<span style={{color: "yellow"}}>
{/* <i className={value >=1 ? "fas fa-star" : value >=0.5 ? "fas-regular fas-star-half" : "fas-regular fa"}></i> */}
<i class="fa-solid fa-star"></i>
</span>

<span style={{color: "yellow"}}>
<i class="fa-solid fa-star"></i>
</span>

<span style={{color: "yellow"}}>
<i class="fa-solid fa-star"></i>
</span>


<span style={{color: "yellow"}}>
<i class="fa-solid fa-star"></i>
</span>


<span style={{color: "yellow"}}>
<i class="fa-solid fa-star"></i>
</span>
{/* <span> {text && text}</span> */}


   </div>
  )
}

export default Rating