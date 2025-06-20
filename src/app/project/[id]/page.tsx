'use client'
import Link from 'next/link'
import Layout from '../../layouts/layout'
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import JsonProjects from '../../projects.json'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type StackItem = {
    name: string;
    url: string;
};

type StackSection = {
    title: string;
    descript: string;
};

type StackImage = {
    img1: string
    img2: string
    img3: string
    img4: string
}

type ProjectType = {
    id: string;
    name: string;
    utilidad: string;
    description: string;
    stack: StackItem[];
    images: StackImage;
    color: string;
    viewProject: boolean;
    urlProject: string;
    urlProjectGit: string;
    sections: StackSection[]
};

const colors: Record<string, string> = {
    "blue": "border-blue-500",
    "red": "border-red-500",
    "green": "border-green-500",
    "purple": "border-purple-500",
    "gray": "border-gray-500"
}

const colorsBg: Record<string, string> = {
    "blue": "bg-blue-500",
    "red": "bg-red-500",
    "green": "bg-green-500",
    "purple": "bg-purple-500",
    "gray": "bg-gray-500"
}

const cursor = {
    "show": "cursor-pointer",
    "hide": "pointer-events-none cursor-not-allowed"
}

export default function Project() {
    const params = useParams();
    const id = params.id as string;
    const [project, setProject] = useState<ProjectType | null>(null)

    useEffect(() => {
        const found = JsonProjects.find(proj => String(proj.id) === String(id));
        setProject(found || null);
    }, [id])

    return (
        <Layout color={colorsBg[project?.color as string]}>
            <div className='m-auto mt-[5%] lg: max-w-[80%] mt-[10%]'>
                <div className='flex flex-wrap items-center justify-between text-7xl lg:flex-nowrap'>
                    <div className="mb-5 lg:mb-0">
                        <p>{project?.name}</p>
                    </div>
                    <div className='text-3xl'>
                        <p>{project?.utilidad}</p>
                    </div>
                </div>
                <div className='my-7 text-2xl'>
                    <p>{project?.description}</p>
                </div>
                <div className='flex flex-wrap items-center gap-5 mb-10 lg:flex-nowrap'>
                    <button className={`py-2 px-6 ${colorsBg[project?.color as string]} rounded ${project?.viewProject ? cursor['show'] : cursor['hide']}`}>
                        <Link target="blank" href={`${project?.urlProject}`}>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <p>{project?.viewProject ? 'Ver proyecto' : 'No disponible'}</p>
                                </div>
                                <div>
                                    <BsArrowUpRight />
                                </div>
                            </div>
                        </Link>
                    </button>
                    <button className={`py-2 px-6 border-[1px] ${colors[project?.color as string]} rounded`}>
                        <Link target="blank" href={`${project?.urlProjectGit}`}>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <p>Codigo fuente</p>
                                </div>
                                <div>
                                    <FaGithub />
                                </div>
                            </div>
                        </Link>
                    </button>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 gap-7 mb-10 lg:grid-cols-3">
                    {
                        project?.sections.map((item, idx) => (
                            <div key={idx} className={`border-[2px] ${colors[project?.color]} px-7 py-3 rounded h-[200px] flex items-center`}>
                                <div>
                                    <p className='text-3xl mb-3'>{item.title}</p>
                                    <p className='text-lg'>{item.descript}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 grid-rows-1 gap-4 mb-5 lg:grid-cols-3">
                    <div className="col-span-3">
                        <img className="w-full h-full object-contain rounded-md" src={`${project?.images.img1}`} alt="Imagen 1" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    <div className="h-[200px] sm:h-[250px] md:h-[300px]">
                        <img className="w-full h-full object-cover rounded-md" src={`${project?.images.img2}`} alt="Imagen 2" />
                    </div>
                    <div className="h-[200px] sm:h-[250px] md:h-[300px]">
                        <img className="w-full h-full object-cover rounded-md" src={`${project?.images.img3}`} alt="Imagen 3" />
                    </div>
                    <div className="h-[200px] sm:h-[250px] md:h-[300px]">
                        <img className="w-full h-full object-cover rounded-md" src={`${project?.images.img4}`} alt="Imagen 4" />
                    </div>
                </div>
                <div className={`w-full border-[1px] ${colors[project?.color as string]} px-10 py-10 rounded mb-50`}>
                    <p className="mb-8 text-xl">Construido con:</p>
                    <div>
                        <div className="flex flex-wrap items-center gap-4 xl:flex-nowrap">
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