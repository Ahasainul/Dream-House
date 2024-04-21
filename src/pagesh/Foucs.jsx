import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import iconone from '../assets/icon (3).png'
import icontow from '../assets/icon (2).png'
import iconthree from '../assets/icon (1).png'
import Image from '../components/Image'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Foucs = () => {
    return (
        <div className='bg-[#F8F7FC] '>
            <Container className={'py-[100px]'}>
                <div className=" text-center pb-12 ">
                    <h2 className='px-7 py-2 text-base rounded-full font-bold bg-[#FFF3F1] text-orange-600 inline-block '> Our Services</h2>
                    <h2 className='text-[48px] font-bold pt-3'>Our Main Focus</h2>

                </div>
                <Flex className={'gap-7'}>
                    <div className="w-[370px] text-center shadow-lg  transition-all hover:border-b-4 hover:border-orange-600 bg-white">
                        <div className=" flex justify-center py-8 ">
                            <Image src={icontow} alt={iconone.png} />
                        </div>
                        <h2 className='text-[28px] font-bold '>Rent a home</h2>
                        <p className='text-[#5C727D] text-base px-9 pt-3'>over 1 million+ homes for sale available
                            on the website, we can match you with a
                            house you will want to call home.</p>
                        <div className="flex gap-2 items-center justify-center">
                            <Button className={'text-orange-600 text-base font-bold py-8'} text={'Find A Home'} />
                            <FaArrowRightLong className='text-orange-600'/>

                        </div>

                    </div>
                    <div className="w-[370px] text-center shadow-lg  transition-all hover:border-b-4 hover:border-orange-600 bg-white">
                        <div className=" flex justify-center py-8 ">
                            <Image src={iconthree} alt={iconone.png} />
                        </div>
                        <h2 className='text-[28px] font-bold '>Sell a home</h2>
                        <p className='text-[#5C727D] text-base px-9 pt-3'>over 1 million+ homes for sale available
                            on the website, we can match you with a
                            house you will want to call home.</p>
                        <div className="flex gap-2 items-center justify-center">
                            <Button className={'text-orange-600 text-base font-bold py-8'} text={'Find A Home'} />
                            <FaArrowRightLong className='text-orange-600'/>

                        </div>

                    </div>
                    <div className="w-[370px] text-center shadow-lg  transition-all hover:border-b-4 hover:border-orange-600 bg-white">
                        <div className=" flex justify-center py-8 ">
                            <Image src={iconone} alt={iconone.png} />
                        </div>
                        <h2 className='text-[28px] font-bold '>Buy a home</h2>
                        <p className='text-[#5C727D] text-base px-9 pt-3'>over 1 million+ homes for sale available
                            on the website, we can match you with a
                            house you will want to call home.</p>
                        <div className="flex gap-2 items-center justify-center">
                            <Button className={'text-orange-600 text-base font-bold py-8'} text={'Find A Home'} />
                            <FaArrowRightLong className='text-orange-600'/>

                        </div>

                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default Foucs