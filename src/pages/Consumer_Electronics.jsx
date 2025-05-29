import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundTilte from '../components/BackgroundTilte'
import electronics from '../assets/images/electronic.jpg'
import Scroll_page from '../components/Scroll_page'
 

function Consumer_Electronics() {
  return (
   <>
    <Navbar/>
       <BackgroundTilte
  title="Consumer Electronics"
  sttitle="Home"
  page="About"
  bgImage={electronics}
>
  
</BackgroundTilte>
<Scroll_page/>

   
   </>
  )
}

export default Consumer_Electronics