import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import matal from '../assets/matal.png'
import btntow from '../assets/btntow.png'
import btn from '../assets/btn.png'
import btns from '../assets/btns.png'
import one from '../assets/1.png'


export const Properties = () => {
    return (
        <>
            <Container className={'py-[120px]'}>
                <Flex>
                    <div className="w-1/2   ">
                        <h2 className='px-7 py-2 text-base rounded-full font-bold bg-[#FFF3F1] text-orange-600 inline-block'> About Us</h2>
                        <h3 className='text-[44px] font-bold pt-4'>Today Sells Properties</h3>
                        <p className='text-[#5C727D] text-base pb-8 pt-4 leading-[30px] pr-16'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>

                        <div className="relative  mb-3">
                            <p className='before:absolute before:top-2/4 before:left-0 before:h-1 before:w-4 before:bg-red-500 ml-8 font-bold '>Live Music Cocerts at Luviana</p>
                        </div>
                        <div className="relative mb-3 ">
                            <p className='before:absolute before:top-2/4 before:left-0  before:h-1 before:w-4 before:bg-red-500 ml-8 font-bold '>Our SecretIsland Boat Tour is Just for You</p>
                        </div>
                        <div className="relative  mb-3">
                            <p className='before:absolute before:top-2/4 before:left-0 before:h-1 before:w-4 before:bg-red-500 ml-8 font-bold '>Live Music Cocerts at Luviana</p>
                        </div>
                        <div className="relative  mb-3">
                            <p className='before:absolute before:top-2/4 before:left-0 before:h-1 before:w-4 before:bg-red-500 ml-8 font-bold '>Live Music Cocerts at Luviana</p>
                        </div>
                        <div className=" flex gap-3 pt-5 pl-5">
                            <Image src={btns} alt={btn.png}/>
                            <Image src={btn} alt={btn.png}/>
                            <Image src={btntow} alt={btn.png}/>
                            <Image src={btn} alt={btn.png}/>
                        </div>
                       
                        <div className="flex pt-6 ">
                        <Image  src={one} alt={one.png}/>
                        <Image src={one} alt={one.png}/>
                        <Image src={one} alt={one.png}/>
                        </div>
                       
                       
                    
                    </div>
                    <div className="w-1/2">
                        <Image className={'w-full'} src={matal} alt={matal.png}/>
                    </div>
                </Flex>
            </Container>
        </>
    )
}
