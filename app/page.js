'use client'

import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie-player';
import arrow from '../public/arrow.svg';
import lottieJson from '../public/animations/main.json';

export default function Home() {
  return (
    <>
      <section className='min-h-screen flex flex-col justify-center items-center'>
        <div className='max-w-md'>
          <Lottie
            loop
            animationData={lottieJson}
            play
          />
        </div>
        <div className='text-center mt-12'>
          <h1 className='text-4xl font-medium text-gray-600 mb-3'>
            Wellcome DevOn!
          </h1>
          <p className='text-lg text-gray-500'>
            This site introduces Jung Yun-seok's portfolio&services.
          </p>
          <Image
            src={arrow}
            className='w-9 h-9 absolute left-1/2 tr-arrow bottom-4'
          />
        </div>
      </section>



    </>
  )
}
