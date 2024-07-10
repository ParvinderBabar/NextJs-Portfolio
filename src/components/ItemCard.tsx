/* eslint-disable @next/next/no-img-element */
// import { Badge } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Badge } from './ui/badge';

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
     
        <div>
            
            <Link className="w-full h-full flex justify-center items-center" href={href}>
                <div className="flex flex-col justify-center items-center">
                    <img src={image} alt={title} className='w-full h-48 object-cover rounded-lg'></img>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="flex flex-col justify-start items-center gap-1 ">
                        <p>
                        <h3>{title}</h3>
                        <span> {description} </span>
                        </p>
                        
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        <span>
                            {tags.map((tag,index) =>( 
                                <Badge key={tag+index} variant="outline">
                                    {tag}
                                    </ Badge>)

                            )}
                        </span>
</div>
                </div>
            </Link></div>
  )
}

export default ItemCard;