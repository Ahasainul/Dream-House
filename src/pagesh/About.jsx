import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import icon from '../assets/icon.png'
import icons from '../assets/icons.png'
import card from '../assets/card.png'
import Button from '../components/Button'

const About = () => {
  return (
 <>
 
<Container>
    <Flex className={'pt-[150px] pb-10'}>
        <div className="w-1/2">
            <Image className={'w-full'} src={card} alt={card.png}/>
        </div>

        <div className="w-1/2 pt-10 pl-5">
           <div className="">
           <h2 className='px-7 py-2 text-base rounded-full font-bold bg-[#FFF3F1] text-orange-600 inline-block'> About Us</h2>
           <h3 className='pt-8 text-[44px] font-bold'>The Leading Real Estate Rental Marketplacee</h3>
           <p className='tet-[#5C727D] text-base pt-[34px] leading-[30px]'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
           </div>
        <Flex className={'flex-wrap'}>
            <div className="w-1/2 flex gap-5 pt-8">
                <Image src={icon} alt={icon.png}/>
                <h4 className='font-bold  text-[17px]'>Smart Home Design</h4>
            </div>
            <div className="w-1/2 flex gap-5 pt-8">
                <Image src={icons} alt={icon.png}/>
                <h4 className='font-bold  text-[17px]'>Exceptional Lifestyle</h4>
            </div>
            <div className="w-1/2 flex gap-5 pt-8">
                <Image src={icons} alt={icon.png}/>
                <h4 className='font-bold  text-[17px]'>Beautiful Scene Around</h4>
            </div>
            <div className="w-1/2 flex gap-5 pt-8">
                <Image src={icon} alt={icon.png}/>
                <h4 className='font-bold  text-[17px]'>Complete 24/7 Security</h4>
            </div>
        </Flex>
        <div className="bg-[#FFF3F1] mt-10 border-l-4  border-orange-600">
            <p className=' pl-6 pr-[70px] py-5 text-left'>"Enimad minim veniam quis nostrud exercitation  llamco laboris. Lorem ipsum dolor sit amet"</p>
        </div>
        <Button className={'px-10 py-3 bg-orange-600 text-white mt-10 font-medium rounded-lg'} text={'Know More'}/>


        </div>
    </Flex>
</Container>
 </>
  )
}

export default About