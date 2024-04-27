import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import zero from '../assets/zero.png'


export const Youtub = () => {
  return (
   <section className='max-w-[1770px] pb-20 mx-auto'>
      <div className=" text-center pb-12 pt-28 ">
                    <h2 className='px-7 py-2 text-base rounded-full font-bold bg-[#FFF3F1] text-orange-600 inline-block '>Properties</h2>
                    <h2 className='text-[48px] font-bold pt-3'>Featured Listings</h2>

                </div>
                <Flex  className={'justify-center '}>
                    <Image className={'w-full'} src={zero} alt={zero.png}/>
                    <Image className={'w-full'} src={zero} alt={zero.png}/>
                    <Image className={'w-full'} src={zero} alt={zero.png}/>
                    <Image className={'w-full'} src={zero} alt={zero.png}/>
               
                </Flex>

   </section>
  )
}
