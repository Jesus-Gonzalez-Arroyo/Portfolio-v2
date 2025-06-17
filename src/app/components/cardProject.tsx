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
        <div className="w-[90%] m-auto md:w-[45%] md:min-w-[400px]">
            <Link href={`project/${id}`}> 
                <section className="mx-auto">
                    <div className="h-fit group">
                        <div className="relative h-[350px] overflow-hidden">
                            <Image className="w-full h-full object-cover rounded-md" src={image} alt={alt} />

                            <div className="absolute rounded-md h-full w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className='text-white text-3xl'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Link> 
        </div>
    )
}