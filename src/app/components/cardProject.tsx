import Image, { StaticImageData } from "next/image";
import Link from 'next/link'
interface CardProjectProps {
    title: string;
    image: StaticImageData;
    alt: string;
    id: string;
}

export function CardProject({title = "", image, alt = "", id = ""}: CardProjectProps) {
    return (
        <div className="w-full h-full">
            <Link href={`project/${id}`}> 
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
                    <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                        <Image 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            src={image} 
                            alt={alt} 
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <h2 className='text-white text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                                {title}
                            </h2>
                            <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                                <span>Ver proyecto</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                            <h3 className="text-white text-2xl font-bold">{title}</h3>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-3xl rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
                    </div>
                </div>
            </Link> 
        </div>
    )
}