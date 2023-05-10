import React from 'react'
import ResumeViewArea from '../ResumeViewArea'
import BackContinue from './BackContinue'
import profileimg from '../../assets/pp.jpg'

function PersonalDetail() {
  return (
    <>
    <BackContinue>
      <div className='text-primary-forground-color text-xl text-center  mb-7 '>Profile Details</div>
    <div className='flex flex-col justify-center   '>
      <div className='flex flex-col content-center space-y-2 mb-2'>
        <div className='w-[138px] h-[177px] self-center'>
          <img src={profileimg}/>
        </div>
          <button className='bg-primary-forground-color w-9/12 h-10 self-center text-secondary-color'>Upload Photo</button>
      </div>
      <div>
          <div className='flex flex-col space-y-2 [&>*]:bg-primary-forground-color [&>*]:w-9/12 [&>*]:self-center [&>*]: text-secondary-color [&>*]:h-10 mb-2'>
            <input  placeholder='First Name' className='placeholder:px-5'/>
            <input  placeholder='Middle Name' className='placeholder:px-5'/>
            <input  placeholder='Last Name' className='placeholder:px-5'/>
          </div>
          <div className='flex flex-col space-y-2 [&>*]:bg-primary-forground-color [&>*]:w-9/12 [&>*]:self-center [&>*]: text-secondary-color [&>*]:h-10 mb-2'>
            <input placeholder='City Name' className='placeholder:px-5'/>
            <input placeholder='Country' className='placeholder:px-5'/>
            <input placeholder='Pin code' className='placeholder:px-5'/>
          </div>
          <div className='flex flex-col space-y-2 [&>*]:bg-primary-forground-color [&>*]:w-9/12 [&>*]:self-center [&>*]: text-secondary-color [&>*]:h-10 mb-2'>
            <input placeholder='Phone Number'className='placeholder:px-5'/>
            <input placeholder='Email Address'className='placeholder:px-5'/>
          </div>
      </div>
    </div>
    </BackContinue>
    </>
  )
}

export default PersonalDetail