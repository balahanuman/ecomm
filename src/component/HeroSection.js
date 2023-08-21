import React from 'react'

const HeroSection = () => {
  return (
   <main className='hero'>
    <div className='hero-content'>
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>BUY SHOES ONLINE AT AMAZON INDIA. The Amazon Shoe Store is online shoe shopping made simple. Our online shoe shopping experience includes an incredible selection of women's shoes,</p>
      <div className='hero-btn'>
        <button>Shop Now</button>
        <button className='secondary-btn'>Categery</button>
      </div>
<div className='shopping'>
  <p>Also Available on</p>
  <div className='brand-icons'>
    <img src='/img/ama.jpeg' alt=''/>
    <img src='/img/fli.jpeg' alt=''/>
  </div>
</div>
    </div>
    <div className='hero-image'>
      <img src='/img/shoe.jpeg' alt=''/>
    </div>

   </main>
  )
}

export default HeroSection ;
