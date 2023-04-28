import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className='mt-24 ml-9 sm:ml-4 text-4xl font-medium text-white'>DevOn Projects</div>
      <div className='flex flex-wrap'>
        <ProjCard />
        <ProjCard />
        <ProjCard />
      </div>
      <div className='mt-24 ml-9 mb-9 sm:ml-4 text-4xl font-medium text-white'>Web Develop Process</div>
      <div className='md:flex md:justify-between md:items-center pl-9 pr-9 sm:pl-4 sm:pr-4'>
        <div className='flex items-center'>
          <div className='flex items-center justify-center bg-blue-900 rounded-full h-16 w-16 xl:h-16 xl:w-16 md:w-11 md:h-11'>
            <span className='text-white font-bold text-2xl xl:text-2xl md:text-xl'>1</span>
          </div>
          <span className='ml-3 xl:text-2xl md:text-xl text-2xl font-bold text-white'>Consulting</span>
        </div>
        <div className='flex items-center'>
          <hr className='flex-1 border-t-2 border-dashed border-gray-300 w-14 xl:w-36 md:w-25 mt-6 md:mt-0'/>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center justify-center bg-blue-900 rounded-full h-16 w-16 xl:h-16 xl:w-16 md:w-11 md:h-11 mt-6 md:mt-0'>
            <span className='text-white font-bold xl:text-2xl md:text-xl text-2xl'>2</span>
          </div>
          <span className='ml-3 font-bold xl:text-2xl md:text-xl text-2xl mt-6 md:mt-0 text-white'>Develop</span>
        </div>
        <div className='flex items-center'>
          <hr className='flex-1 border-t-2 border-dashed border-gray-300 w-14 xl:w-36 md:w-25 mt-6 md:mt-0'/>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center justify-center bg-blue-900 rounded-full h-16 w-16 xl:h-16 xl:w-16 md:w-11 md:h-11 mt-6 md:mt-0'>
            <span className='text-white font-bold xl:text-2xl md:text-xl text-2xl'>3</span>
          </div>
          <span className='ml-3 font-bold xl:text-2xl md:text-xl text-2xl mt-6 md:mt-0 text-white'>Edit Details</span>
        </div>
        <div className='flex items-center'>
          <hr className='flex-1 border-t-2 border-dashed border-gray-300 w-14 xl:w-36 md:w-25 mt-6 md:mt-0'/>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center justify-center bg-blue-900 rounded-full h-16 w-16 xl:h-16 xl:w-16 md:w-11 md:h-11 mt-6 md:mt-0'>
            <span className='text-white font-bold xl:text-2xl md:text-xl text-2xl'>4</span>
          </div>
          <span className='ml-3 font-bold xl:text-2xl md:text-xl text-2xl mt-6 md:mt-0 text-white'>Complete</span>
        </div>
      </div>
      
    </div>
  )
}

function ProjCard(){
  return (
    <Link href='https://frh.kr' className='p-4 sm:p-4 mx-auto w-11/12 sm:w-1/2 lg:w-1/3 h-96' id='Projcard'>
      <div className='h-full rounded-lg overflow-hidden'>
        <div className='h-full pf-1'>
          <div className='pf-ct'>
            <h1 className='text-2xl text-center font-semibold mb-2 text-white'>Frist Hosting</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}