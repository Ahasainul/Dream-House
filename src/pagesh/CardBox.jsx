import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import one from '../assets/one.png'
import tow from '../assets/tow.png'
import three from '../assets/three.png'
import four from '../assets/four.png'


const CardBox = () => {
    return (
        <>
            <div className="bg-[#F8F7FD] ">
                <Container>
                    <Flex className={''}>
                        <div className="w-[292px] text-center justify-center py-16 hover:bg-white transition-all hover:shadow-lg  group relative">
                            <div className=" flex justify-center before:absolute before:top-2/4 before:left-0 before:h-[48px] before:w-1 group-hover:before:bg-[#F58727] 
                               after:absolute   after:top-2/4 after:right-0 after:h-[48px] after:w-1 group-hover:after:bg-[#F58727] transition-all">
                                <Image src={one} alt={'one.png'} />
                            </div>
                            <h2 className='font-bold text-[42px] pt-[20px] pb-[20px]'>560</h2>
                            <h2 className='text-[#5C727D] font-bold text-[20px]'>Total Area Sq</h2>
                        </div>
                        <div className="w-[292px] text-center justify-center py-16 hover:bg-white transition-all hover:shadow-lg  group relative">
                            <div className=" flex justify-center before:absolute before:top-2/4 before:left-0 before:h-[48px] before:w-1 group-hover:before:bg-[#F58727] 
                               after:absolute   after:top-2/4 after:right-0 after:h-[48px] after:w-1 group-hover:after:bg-[#F58727] transition-all">
                                <Image src={tow} alt={'one.png'} />
                            </div>
                            <h2 className='font-bold text-[42px] pt-[20px] pb-[20px]'>190</h2>
                            <h2 className='text-[#5C727D] font-bold text-[20px]'>Total Area Sq</h2>
                        </div>
                        <div className="w-[292px] text-center justify-center py-16 hover:bg-white transition-all  hover:shadow-lg group relative">
                            <div className=" flex justify-center before:absolute before:top-2/4 before:left-0 before:h-[48px] before:w-1 group-hover:before:bg-[#F58727] 
                               after:absolute   after:top-2/4 after:right-0 after:h-[48px] after:w-1 group-hover:after:bg-[#F58727] transition-all">
                                <Image src={three} alt={'one.png'} />
                            </div>
                            <h2 className='font-bold text-[42px] pt-[20px] pb-[20px]'>260</h2>
                            <h2 className='text-[#5C727D] font-bold text-[20px]'>Total Constructions</h2>
                        </div>
                        <div className="w-[292px] text-center justify-center py-16 hover:bg-white hover:shadow-lg transition-all  group relative">
                            <div className=" flex justify-center before:absolute before:top-2/4 before:left-0 before:h-[48px] before:w-1 group-hover:before:bg-[#F58727] 
                               after:absolute   after:top-2/4 after:right-0 after:h-[48px] after:w-1 group-hover:after:bg-[#F58727] transition-all">
                                <Image src={four} alt={'one.png'} />
                            </div>
                            <h2 className='font-bold text-[42px] pt-[20px] pb-[20px]'>760</h2>
                            <h2 className='text-[#5C727D] font-bold text-[20px]'>Apartio Rooms</h2>
                        </div>
                    </Flex>
                </Container>

            </div>

        </>
    )
}

export default CardBox