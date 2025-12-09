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
    "blue": "from-blue-400 to-blue-600",
    "red": "from-red-400 to-red-600",
    "green": "from-green-400 to-green-600",
    "purple": "from-purple-400 to-purple-600",
    "gray": "from-gray-400 to-gray-600"
}

const colorsBorder: Record<string, string> = {
    "blue": "border-blue-500/50",
    "red": "border-red-500/50",
    "green": "border-green-500/50",
    "purple": "border-purple-500/50",
    "gray": "border-gray-500/50"
}

const colorsBg: Record<string, string> = {
    "blue": "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    "red": "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    "green": "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    "purple": "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    "gray": "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
}

const colorsGlow: Record<string, string> = {
    "blue": "shadow-blue-500/20",
    "red": "shadow-red-500/20",
    "green": "shadow-green-500/20",
    "purple": "shadow-purple-500/20",
    "gray": "shadow-gray-500/20"
}

export default function Project() {
    const params = useParams();
    const id = params.id as string;
    const [project, setProject] = useState<ProjectType | null>(null)
    const [modalImage, setModalImage] = useState<string | null>(null)

    useEffect(() => {
        const found = JsonProjects.find(proj => String(proj.id) === String(id));
        setProject(found || null);
    }, [id])

    return (
        <Layout>
            {/* Modal para imagen en grande */}
            {modalImage && (
                <div 
                    className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onMouseEnter={() => setModalImage(modalImage)}
                    onMouseLeave={() => setModalImage(null)}
                >
                    <button
                        onClick={() => setModalImage(null)}
                        className="absolute top-6 right-6 text-white text-5xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md hover:rotate-90 transition-all duration-300 z-10"
                        aria-label="Cerrar modal"
                    >
                        ×
                    </button>
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img 
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" 
                            src={modalImage} 
                            alt="Imagen ampliada" 
                        />
                    </div>
                </div>
            )}
            
            <div className='max-w-7xl mx-auto px-4 md:px-8 mt-[8%] mb-20'>
                <div className='mb-12'>
                    <div className="mb-6">
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            {project?.name}
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-400 font-semibold'>{project?.utilidad}</p>
                    </div>
                    <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl'>{project?.description}</p>
                </div>

                <div className='flex flex-wrap items-center gap-4 mb-16'>
                    <Link target="blank" href={`${project?.urlProject}`}>
                        <button 
                            disabled={!project?.viewProject}
                            className={`group relative py-3 px-8 ${colorsBg[project?.color as string]} rounded-lg font-semibold text-white shadow-lg ${colorsGlow[project?.color as string]} transition-all duration-300 ${project?.viewProject ? 'hover:scale-105 hover:shadow-xl' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <div className='flex gap-3 items-center'>
                                <span>{project?.viewProject ? 'Ver proyecto' : 'No disponible'}</span>
                                {project?.viewProject && (
                                    <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                )}
                            </div>
                        </button>
                    </Link>
                    <Link target="blank" href={`${project?.urlProjectGit}`}>
                        <button className={`group py-3 px-8 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                            <div className='flex gap-3 items-center'>
                                <span>Código fuente</span>
                                <FaGithub className="group-hover:rotate-12 transition-transform" />
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {
                        project?.sections.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border ${colorsBorder[project?.color]} rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-xl ${colorsGlow[project?.color]}`}
                            >
                                <h3 className='text-2xl font-bold mb-3 text-white pl-4'>{item.title}</h3>
                                <p className='text-gray-300 leading-relaxed pl-4'>{item.descript}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img className="w-full h-full object-cover" src={`${project?.images.img1}`} alt="Imagen principal del proyecto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div 
                        className="group relative h-[250px] md:h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                        onMouseEnter={() => setModalImage(project?.images.img2 || null)}
                        onMouseLeave={() => setModalImage(null)}
                    >
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={`${project?.images.img2}`} alt="Imagen 2" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">Click para ampliar</span>
                        </div>
                    </div>
                    <div 
                        className="group relative h-[250px] md:h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                        onMouseEnter={() => setModalImage(project?.images.img3 || null)}
                        onMouseLeave={() => setModalImage(null)}
                    >
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={`${project?.images.img3}`} alt="Imagen 3" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">Click para ampliar</span>
                        </div>
                    </div>
                    <div 
                        className="group relative h-[250px] md:h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                        onMouseEnter={() => setModalImage(project?.images.img4 || null)}
                        onMouseLeave={() => setModalImage(null)}
                    >
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={`${project?.images.img4}`} alt="Imagen 4" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">Click para ampliar</span>
                        </div>
                    </div>
                </div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-8">
                        <span className={`w-2 h-12 bg-gradient-to-b ${colors[project?.color as string]} rounded-full`}></span>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Construido con</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {project?.stack.map((item, idx) => (
                            <div 
                                className="group flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg" 
                                key={idx}
                            >
                                <img className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" src={item.url} alt={item.name} />
                                <p className="text-sm md:text-base font-semibold text-gray-300 text-center">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}