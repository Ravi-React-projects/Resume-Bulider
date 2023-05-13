import React from 'react'

function SkillView() {
  return (
    <div className='flex justify-center'>
    <div className='flex justify-between p-4 bg-primary-forground-color rounded w-9/12 mb-2 items-center'>
        <p  text-secondary-color>Skill Name</p>
        <div className='flex flex-row justify-center'>
            <div>
                <div className=' flex justify-between [&>*]:mr-5'>
                    <div className='rounded-full bg-primary-color w-4 h-4'></div>
                    <div className='rounded-full bg-primary-color w-4 h-4'></div>
                    <div className='rounded-full bg-primary-color w-4 h-4'></div>
                    <div className='rounded-full bg-primary-color w-4 h-4'></div>
                    <div className='rounded-full bg-secondary-color w-4 h-4'></div>

                </div>
                <div className='flex justify-center mr-5'>Intermediate Level</div>
            </div>
            <div className='cursor-pointer w-[28px] h-[28px]'>
                <svg className='fill-[#8a1a1a]' xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 96 960 960" width="28px"><path d="M253 957q-36.188 0-64.094-26.912Q161 903.175 161 866V314h-58v-91h228v-47h297v47h228v91h-58v552q0 37.175-27.206 64.088Q743.588 957 706 957H253Zm104-169h74V390h-74v398Zm173 0h75V390h-75v398Z"/></svg>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SkillView