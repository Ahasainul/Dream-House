import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaCirclePlay } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import SubHadding from '../components/SubHadding';
import Hadding from '../components/Hadding';
import Button from '../components/Button';
import Image from '../components/Image'
import shape from '../assets/shape.png'
import axios from 'axios';
import { RiListSettingsFill } from "react-icons/ri";

const Home = () => {
  let [all, setAll] = useState([])
  useEffect(() => {
    async function all() {
      let data = await axios.get('https://restcountries.com/v3.1/all')
      setAll(data.data)
    }
    all()
  })
  return (
    <>
      <div className="bg-[#F2F6F7] relative">
        <Image className={'absolute'} src={shape} alt={shape.png} />
        <Container>
          <Flex className={'items-center gap-2 pt-[235px]'}>
            <FaHome className='text-[18px] text-orange-600' />
            <SubHadding text={'Real Estate Agency'} />
          </Flex>
          <Hadding className={'text-6xl font-bold  pt-9 pb-6'} text={'Find Your #Dream#'} />
          <Hadding className={'text-6xl font-bold pb-7'} text={'House #By# Us'} />
          <SubHadding className={'text[#5C727D] text-base'} text={"Lorem ipsum dolor sit amet, consectetur adipisicing"} />
          <Flex className={'pt-6 gap-10 items-center pb-[200px]'}>
            <Button className={'px-6 py-4  rounded-sm bg-orange-600 text-white font-semibold'} text={'View Properties'} />
            <FaCirclePlay className='text-[60px]  text-orange-400' />
          </Flex>
          <Flex className={'gap-3 items-center w-[1170px] bg-white py-6 px-5 absolute bottom-[-50px] '}>
              <select className='w-[266px] py-2 px-2 border-2 hover:border-orange-600' >
                {all.map((item) =>
                  <option>
                    {item.region}
                  </option>
                )}
              </select>
              <select className='w-[266px] py-2 px-2 ml-5 border-2  hover:border-orange-600' >
                {all.map((item) =>
                  <option>
                    {item.name.common}
                  </option>
                )}
              </select> 
              <select className='w-[266px] py-2 px-2 ml-5 border-2  hover:border-orange-600' >
                {all.map((item) =>
                  <option>
                    {item.name.common}
                  </option>
                )}
              </select>
            < RiListSettingsFill className='text-[28px] ml-4 text-orange-600'/>
            <Button className={'px-10 py-4  rounded-sm bg-orange-600 text-white font-normal ml-5'} text={'FIND NOW'} />
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Home