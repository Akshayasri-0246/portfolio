import { configure } from "@testing-library/react"

export default function Contact(){
  const config={
    email :'akshayasri0246@gmail.com',
    phone:'+nrp##########'
  }

    return <section  id= 'contact' className='flex  flex-col bg-primary px-5 py-32 text-white' >
        <div className=' flex flex-col items-center '>
                <h1 className='text-4xl border-b-4  border-secondary  mb-4  w-[160px] font-bold px-3'> Contact</h1>
                <p className='pb-5 px-5'>If you want to discus more in detail, please contact me. </p>
                <p className='py-2'> <span className='font-bold'>Email :</span>{config.email} </p>
                <p className='py-2'> <span className='font-bold'>Phone :</span>{config.phone} </p>
        </div>
    </section>
}