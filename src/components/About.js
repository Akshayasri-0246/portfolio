import AboutImg from '../asserts/about.jpg';

export default function About(){
    const config = {
      line1:'Im Akshaya Sri a dedicated and detail-oriented professional specializing in UI/UX design and a keen enthusiasm for web development. Successfully completed internships with CodSoft and Internezy, where I honed my expertise in designing intuitive, user-centric interfaces and gained practical experience in modern design methodologies.',
      line2:' Passionate about building responsive and aesthetically engaging websites, blending technical proficiency with creative innovation. Proven leadership capabilities demonstrated through active involvement in NSS initiatives, ensuring efficient collaboration and execution with team. Committed to delivering high-quality solutions that enhance user experiences and drive impactful outcomes in a fast-paced environment.',
      line3:'Skills: Proficient in UI/UX designing , HTML, CSS, React.js,MongoDB, C, C++, Python, Java.',
    } 
    return <section className='flex  flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
           <div className='flex flex-col justify-center  text-white'>
                <h1 className='text-3xl border-b-4 border-primary  mb-4  w-[170px] font-bold px-3'> About Me</h1>
                <p className='pb-5 px-5'> {config.line1}  </p>
                <p className='pb-5 px-5'> {config.line2}  </p>
                <p className='pb-5 px-5'> {config.line3}  </p>
           </div>
            
        </div>
    </section>
}