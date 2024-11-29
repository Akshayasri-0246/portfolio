import ResumeImg from '../asserts/Resume.png';
export default function Resume(){
    const config = {
        link: ''
    }
    return <section id= 'resume' className='flex  flex-col md:flex-row bg-secondary px-2'>
        <div className=' py-5 md:w-1/2 flex  justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
           <div className='flex flex-col justify-center  text-white'>
                <h1 className='text-4xl border-b-4 border-primary  mb-4  w-[160px] font-bold px-3'> Resume</h1>
                <p className='pb-5 px-5'>You can view my resume <a className='btn' href={config.link}> Download</a> </p>
           </div>
            
        </div>
    </section>
}