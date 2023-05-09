import React from 'react'

function BackContinue(props) {
    
  return (
    <div className=' bg-primary-color pb-3'>
        <div>
            { props.children}
        </div>
        <div className='flex flex-row justify-evenly [&>*]:bg-primary-forground-color [&>*]:text-secondary-color [&>*]:w-2/5 [&>*]:h-10'>
            <button>Back</button>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default BackContinue