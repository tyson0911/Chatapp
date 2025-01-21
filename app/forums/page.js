import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics = [
    {
      title: "Python",
      img: "/python.png",
      desc: "Let's discuss Python",
      slug: "python-new"
    },
    {
      title: "JavaScript",
      img: "/javascript.png",
      desc: "Let's discuss JavaScript",
      slug: "javascript-new"
    },
    {
      title: "Java",
      img: "/java.png",
      desc: "Let's discuss Java",
      slug: "java-new"
    },
    {
      title: "C++",
      img: "/c++.png",
      desc: "Let's discuss C++",
      slug: "c++-new"
    },
    {
      title: "C#",
      img: "/c#.png",
      desc: "Let's discuss C#",
      slug: "chash-new"
    }
  ];

const forums = () => {
  return (
    <div className='container mx-auto my-40 bg-red-500'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Forums</h1>
      <div className='flex gap-4 flex-wrap justify-center'>
        {topics.map((topic)=> {
            return <div key={topic.img} className='bg-slate-500 shadow-lg w-1/4 m-4 flex flex-col justify-center items-center py-10'>
                <Image alt='image' width={34} height={34} src={topic.img}/>
                <h2 className='text-2xl font-bold'>{topic.title}</h2>
                <p>{topic.desc}</p>
                <Link href={`/forum/${topic.slug}`}>
                    <Button className='px-10 mt-4'>Join</Button>
                </Link>
                </div>
        })}
      </div>

    </div>
    
  )
}

export default forums
