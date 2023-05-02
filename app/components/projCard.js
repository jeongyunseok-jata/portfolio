import Image from 'next/image'

const projCard = props => (
    <div className='inline w-full h-[330px] sm:w-[300px] border border-slate-300 rounded-xl mx-2 mb-6 box-content hover:scale-105 duration-300'>
        <Image 
            src={props.imgName}
            width={600}
            height={400}
            className='w-full h-40 rounded-t-lg'
        />
        <div className='pl-4 pr-4 pt-3'>
            <div className='text-xl font-semibold'>
                {props.title}
            </div>
            <div className='text-base text-stone-500 mt-4'>
                {props.content}<br/>
                period : {props.date}
            </div>
            <div className='mt-5 flex'>
            {props.tags.map(tag => (
                    <div key={tag} className='bg-blue-200/75 text-center text-base font-normal w-16 py-1 rounded-md mr-2'>{tag}</div>
                ))}
            </div>
        </div>
    </div>
)

export default projCard;