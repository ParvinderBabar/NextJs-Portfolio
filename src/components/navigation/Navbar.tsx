import React from 'react'
import { House ,Briefcase,Folder,GraduationCap,Mail,DiamondPlus, Ghost, icons, Icon} from 'lucide-react';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { Button } from '../ui/button';
import Link from 'next/link';
//lucid icons from website copy jsx
type Props = {}

function navbar({}: Props) {
  return (
    
<div className="w-full h-full max-w-lg bg-primary-background px-4  py-2 rounded-xl flex justify-between items-center border m-4 ">
          
      <div className=' flex justify-center items-center gap-4'>
       
       <Link  href="#home"> <Button variant="ghost" size="icon" >
          {/* home */}
      <House  /></Button></Link>
      {/* projects */}
             <Link  href="#home"> <Button variant="ghost" size="icon"><Folder /></Button>
        </Link>
      {/* {experience} */}
        <Link  href="#home"><Button variant="ghost" size="icon"><Briefcase  /></Button></Link>
      {/* education */}
        <Link  href="#home"><Button variant="ghost" size="icon"><GraduationCap  /></Button></Link>
       <Link  href="#home"><Button variant="ghost" size="icon"> 
<Mail /></Button></Link>
    </div>
      <div className='flex justify-center items-center gap-4'>
      <Link  href="#home"></Link>  <Button className='flex justify-center items-center gap-2' variant={'outline'}>
             {/* hire me */}
          <DiamondPlus className='' />
          Hire Me
       </Button>
     
      {/* <ModeToggle to change theme/> */}
      <ModeToggle/>
      </div>
    </div>
  )
}

export default navbar