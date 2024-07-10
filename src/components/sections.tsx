import React from 'react'

type Props = {
    title: string;
    icon: React.ReactNode;
children: React.ReactNode;
}

function Section({title,icon,children}: Props) {
    return (
        <div className='bg-secondary max-w-lg w-full h-full m-2 flex  flex-col justify-center gap-1 items-start'> 
            <span className='flex justify-center gap-1 items-center m-2 p-4 text-xl font-semibold' >{icon}<h2>{title}</h2> </span>
      <div className='m-2 w-full h-full flex flex-col justify-center gap-1 items-center'>{children}</div>
    </div>
  )
}

export default Section;