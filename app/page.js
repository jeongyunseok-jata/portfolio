'use client'

import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie-player';
import lottieJson from '../public/animations/main.json';
import arrow from '../public/icons/arrow.svg';
import proj1 from '../public/imgs/1.jpg';
import proj2 from '../public/imgs/2.jpg';
import proj3 from '../public/imgs/3.jpg';
import proj4 from '../public/imgs/4.jpg';

import ProjCard from './components/projCard';

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
            className='w-8 h-8 absolute left-1/2 tr-arrow bottom-4'
          />
        </div>
      </section>

      <section className='flex items-center justify-center mt-10 mb-10 ci-on'>
        <div className='container mx-auto'>
          <h1 className='mx-3 mb-5 text-2xl font-bold'>Projects</h1>
          <div className='flex flex-wrap w-full justify-center'>
            <ProjCard
              imgName={proj1}
              title='FirstHosting Web'
              content='FirstHosting 2023 renewal web.'
              date='2023-04'
              tags={['HTML', 'CSS', 'JS']}
            />
            <ProjCard
              imgName={proj2}
              title='Community Web'
              content='Game server community.'
              date='2022'
              tags={['HTML', 'CSS', 'JS','PHP']}
            />
            <ProjCard
              imgName={proj3}
              title='FirstHosting Web'
              content='FirstHosting 2023 renewal web.'
              date='2023-04'
              tags={['HTML', 'CSS', 'JS']}
            />
            <ProjCard
              imgName={proj4}
              title='FirstHosting Web'
              content='FirstHosting 2023 renewal web.'
              date='2023-04'
              tags={['HTML', 'CSS', 'JS']}
            />
          </div>
        </div>
      </section>




    </>
  )
}
