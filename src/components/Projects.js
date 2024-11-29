import WebsiteImg1 from '../asserts/Employee-Registration.png';
import WebsiteImg2 from '../asserts/juice-app-login.png';
import WebsiteImg3 from '../asserts/food-app.png';

export default function Projects(){

   const config = {
        projects: [
      {
       image:  WebsiteImg1,
       description: 'Employee Registration System Build with xampp, intelliJ idea',
       Link: 'https://github.com/Akshayasri-0246/Employee-Registration-System',
      },
      {
         image: WebsiteImg2,
         description: 'A Basic Login page designed using Figma',
         Link: 'https://github.com/Akshayasri-0246/Intern-UI-UX-Codsoft-/blob/main/Task%201%20Login%20page%20creation.png',
      } ,
      {
         image: WebsiteImg3,
         description: 'A basic food delivery app designed using Figma.',
         Link: 'https://github.com/Akshayasri-0246/Intern-UI-UX-Codsoft-/blob/main/codsoft%20task%203.png ',
      }, 
    ]
   }

    return <section id= 'projects' className=" flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5 "> 
               <h1 className='text-4xl border-b-4 border-secondary  mb-5  w-[160px] font-bold px-3'> Projects</h1> 
            <p> </p>
            </div>    
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'> 
             {config.projects.map((project) => (
               <div className='relative '> 
                  <img className='h-[270px] w-[500px]' src={project.image}/>
                  <div className='project-desc'> 
                      <p className='text-center px-5 py-5'>{project.description}</p>
                      <div className='flex justify-center'>
                         <a className='btn ' target='_blank' href={ project.Link}>View project </a>
                      </div>
                  </div>
               </div> 
               
             ))}
            </div>      
        </div>
    </section>
}