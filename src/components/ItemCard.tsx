/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Badge } from './ui/badge';
import { ChevronRight } from 'lucide-react';

type Props = {
    // children: React.ReactNode; 
    image: string;
    title: string;
    description: string;
    href: string;
    tags: string[];

}

function ItemCard({image,title,description,href,tags}: Props) {
    return (
        
            
<Link className="flex justify-center items-center flex-1 gap-4 w-full h-full" href={href}>
    <div className="flex flex-col justify-center  items-start h-full">
            <img src={image} alt={title} className='w-16 h-16 object-cover rounded-lg'></img>
    </div>
                {/* <div className="flex flex-col justify-center items-center gap-1 flex-grow"> */}
                    
    < div className="flex  flex-col justify-center items-start gap-2 w-full h-full flex-1 ">
                <span className='text-sm'>
                        <span className='text-base font-semibold'>{title}</span>
                        <span>{"-"}</span>
                   
                        <span className='text-sm'> {description} </span>
                        </span>
                        <span className="flex justify-start items-center gap-2  ">
                            {tags.map((tag,index) =>( 
                                <Badge key={tag+index} variant="outline" >
                                    {tag}
                                    </ Badge>)

                            )}
                        </span>    
          </div>           
                <div className="p-2 pr-4">
<ChevronRight/>
                    </div>
            </Link>
       
  )
}

export default ItemCard;