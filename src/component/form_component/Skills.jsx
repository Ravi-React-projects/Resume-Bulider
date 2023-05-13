import React from 'react'
import BackContinue from './BackContinue'
import SkillView from './SkillView'


function Skills() {
  return (
    <BackContinue>
        <div className='text-primary-forground-color text-xl text-center  mb-7 '>Skills</div>
        <div className='flex flex-col space-y-2 [&>*]:bg-primary-forground-color [&>*]:w-9/12 [&>*]:self-center [&>*]: text-secondary-color [&>*]:h-10 mb-2'>
          <input placeholder='Skill Name'className='placeholder:px-5'/>
          <button className='bg-primary-forground-color w-9/12 h-10 self-center text-secondary-color'> Select Skill level </button>
          <button className='bg-primary-forground-color w-9/12 h-10 self-center text-secondary-color'>Add Skill</button>
        </div>
        <SkillView/>
    </BackContinue>
  )
}

export default Skills