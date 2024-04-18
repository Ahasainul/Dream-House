import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaRegUser,FaRegHeart,FaSearch } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import logo from '../assets/logo.png'
import Image from '../components/Image';
import List from '../components/List'
import { Link } from 'react-router-dom';
const Naver = () => {
    return (
        <>
            <div className="bg-[#0A2C3D]">
                <Container>
                    <Flex >
                        <div className="w-1/2 flex gap-2  items-center">
                            <CiLocationOn className='text-white text-lg' />
                            <p className='text-white text-sm py-4 border-r pr-3 border-r-gray-700'>254 Lillian Blvd, Holbrook</p>
                            <div className="flex    items-center gap-2">
                                <CgMail className='text-white text-lg' />
                                <p className='text-white text-sm py-4 '>info@santizex-site.com</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex gap-2  justify-end items-center">
                            <Flex  >
                                <FaFacebookF className='text-white text-base mr-3' />
                                <FaTwitter className='text-white text-base  mr-3' />
                                <RiTwitterXFill className='text-white text-base  mr-3' />
                            </Flex>
                            <button className='h-full px-7 bg-orange-600 text-white'>Add Listings</button>
                        </div>
                    </Flex>
                </Container>
            </div>

            <Container>
                <Flex className={'py-8 items-center'}>
                    <div className="w-[30%]">
                     
                   <Link to='/'> 
                   <Image src={logo} alt={logo.png} />
                        
                   </Link>
                    </div>
                    <div className="w-[60%] ">
                        <ul >
                            <Flex className={'items-center space-x-10 ml-12'}>
                                <List className={'hover:text-orange-600 transition-all'} text={'Home'} />
                                <List className={'hover:text-orange-600 transition-all'} text={'Properties'} />
                                <List className={'hover:text-orange-600 transition-all'} text={'Property'} />
                                <List className={'hover:text-orange-600 transition-all'} text={'Blog'} />
                                <List className={'hover:text-orange-600 transition-all'} text={'Pages'} />
                                <List className={'hover:text-orange-600 transition-all'} text={'Contact'} />
                            </Flex>
                        </ul>
                    </div>

                    <div className="w-[10%]">
                        <Flex className={'justify-end gap-6'}>
                        <FaRegUser className='text-[20px] hover:text-orange-600 transition-all' />
                        <FaRegHeart   className='text-[20px] hover:text-orange-600 transition-all' />
                        <FaSearch  className='text-[20px] hover:text-orange-600 transition-all '   />

                        </Flex>
                    </div>

                </Flex>

            </Container>
        </>
    )
}

export default Naver