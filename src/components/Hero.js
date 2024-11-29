import HeroImg from '../asserts/hero.png';
import { AiOutlineLinkedin ,AiOutlineGithub,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";

export default function Hero(){
  const config ={
    subtitle:' ',
    social : {
      twitter: ' ',
      instagram: ' ',
      linkedin : 'https://www.linkedin.com/in/akshaya-sri-82b5b32a2/',
      github : 'https://github.com/ ',
    }
  }

 
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'> 
          <h1 className='text-white text-6xl font-hero-font'>Hi,<br/> I'm Akshaya Sri 
           <p className='text-2xl'>{config.subtitle} </p>
          </h1>
          <div className='flex py-10'> 
            <a href={config.social.linkedin} className='pr-5 hover:text-white'> <AiOutlineLinkedin size={37} /></a>
            <a href={config.social.github} className='pr-5 hover:text-white'> <AiOutlineGithub size={37} /></a>
            <a href={config.social.twitter} className='pr-5 hover:text-white'> <AiOutlineTwitter size={37}/></a>
            <a href={config.social.instagram} className='pr-5 hover:text-white'> <AiOutlineInstagram size={37}/></a>
          </div>
        </div>
        
       
        <img  className='md:w-1/3' src={HeroImg}/> 
    </section>
}