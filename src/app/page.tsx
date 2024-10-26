 import React from 'react'
import Footer from './components/Footer'
  
 const page = () => {
   return (
     <><div className='transition-transform'>
       <img src="bg1.jpg" alt="cake picture" height={70} width={15000} />
     </div>
     <main> 
         
<div className='text-center py-10   text-amber-700   text-4xl  bg-white'><b>"Our Menu"</b>
<h1 className='m-10    columns-4  '><img src="p-1.png" alt=""/> <img src="p-2.png" alt="" /><img src="p-3.png" alt="" /> <img src="p-4.png" alt="" /> </h1>
            
<h2 className='m-10  columns-4'><img src="p-5.png" alt="" /> <img src="p-6.png" alt="" /> <img src="p-7.png" alt="" /> <img src="p-8.png" alt="" /></h2>
   <h3 className='columns-4 m-10 rounded-full'>< img src="p-9.png" alt="" /> <img src="p-10.png" alt="" /> <img src="p-11.png" alt="" /> <img src="p-12.png" alt="" /></h3>
  
    </div>  
 <div><h1 className='  bg-orange-950 m-1 text-center text-amber-700 text-4xl '><b>About Us</b><p className='text-2xl'>At Sugar Canvas, we believe that cake is more than just a dessert; it's a canvas for creativity. We specialize in creating stunning, custom cakes that are as delicious as they are beautiful. From classic to contemporary, we'll bring your vision to life, one bite at a time At Sugar Canvas, we're committed to making your special occasion even sweeter. We work closely with you to understand your unique vision and bring it to life. Our friendly and knowledgeable staff will guide you through the entire process, from initial consultation to final delivery.</p></h1></div>
        <Footer/>
           </main></>

           
        








         
      
   )
 }
 
 export default page