'use client'
import Image from "next/image";
import Layout from '../../layouts/layout'
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import JsonProjects from '../../projects.json'

import CreditCard from '../../../../public/creditCard.png'
import JuniorLading from '../../../../public/juniorLading.png'
import Farmazul from '../../../../public/farmazul.png'
import Casazul from '../../../../public/casazul.png'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type StackItem = {
  name: string;
  url: string;
};

type ProjectType = {
  id: string;
  name: string;
  utilidad: string;
  description: string;
  stack: StackItem[];
  images: Record<string, string>;
  color: string;
  viewProject: boolean;
  urlProject: string;
};


export default function Project() {
    const params = useParams();
    const id = params.id as string;
    const [project, setProject] = useState<ProjectType | null>(null)

    useEffect(() => {
        const found = JsonProjects.find(proj => String(proj.id) === String(id));
        setProject(found || null);
    }, [id])

    return (
        <Layout>
            <div className='m-auto mt-[5%] lg: max-w-[80%] mt-[10%]'>
                <div className='flex items-center justify-between text-7xl'>
                    <div>
                        <p>{project?.name}</p>
                    </div>
                    <div className='text-3xl'>
                        <p>{project?.utilidad}</p>
                    </div>
                </div>
                <div className='my-7 text-2xl'>
                    <p>{project?.description}</p>
                </div>
                <div className='flex items-center gap-5 mb-10'>
                    <button className='py-2 px-6 bg-red-500 rounded'>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <p>{project?.viewProject ? 'Ver proyecto' : 'No disponible'}</p>
                            </div>
                            <div>
                                <BsArrowUpRight />
                            </div>
                        </div>
                    </button>
                    <button className='py-2 px-6 border-[1px] border-red-500 rounded'>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <p>Codigo fuente</p>
                            </div>
                            <div>
                                <FaGithub />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-7 mb-10">
                    <div className='border-[2px] border-red-500 px-7 py-3 rounded h-[200px] flex items-center'>
                        <div>
                            <p className='text-3xl mb-3'>Title</p>
                            <p className='text-lg'>Description</p>
                        </div>
                    </div>
                    <div className='border-[2px] border-red-500 px-7 py-3 rounded h-[200px] flex items-center'>
                        <div>
                            <p className='text-3xl mb-3'>Title</p>
                            <p className='text-lg'>Description</p>
                        </div>
                    </div>
                    <div className='border-[2px] border-red-500 px-7 py-3 rounded h-[200px] flex items-center'>
                        <div>
                            <p className='text-3xl mb-3'>Title</p>
                            <p className='text-lg'>Description</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="col-span-3">
                        <Image className="w-full h-full object-cover rounded-md" src={CreditCard} alt="Imagen 1" />
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-5 mb-10">
                    <div className="row-start-2 h-[300px]">
                        <Image className="w-full h-full object-cover rounded-md" src={Casazul} alt="Imagen 2" />
                    </div>
                    <div className="row-start-2 h-[300px]">
                        <Image className="w-full h-full object-cover rounded-md" src={Farmazul} alt="Imagen 3" />
                    </div>
                    <div className="row-start-2 h-[300px]">
                        <Image className="w-full h-full object-cover rounded-md" src={JuniorLading} alt="Imagen 4" />
                    </div>
                </div>
                <div className="w-full border-[1px] border-red-500 px-10 py-10 rounded mb-50">
                    <p className="mb-8 text-xl">Construido con:</p>
                    <div>
                        <div className="flex items-center gap-2">
                            {project?.stack.map((item, idx) => (
                                <div className="flex items-center gap-5 m-auto" key={idx}>
                                    <img className="w-[80px] h-[80px] object-contain max-w-none" src={item.url} alt="" />
                                    <p className="text-2xl">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}