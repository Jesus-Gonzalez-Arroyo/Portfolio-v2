import { FaGithub } from 'react-icons/fa'

interface StackItem {
    name: string;
}

interface CardProjectProps {
    title: string;
    description: string;
    stack: StackItem[];
}

export function CardProject({ stack = [], title = "", description = "" }: CardProjectProps) {
    return (
        <div>
            <section className="mx-auto">
                <div className="h-fit group">
                    <div className="relative overflow-hidden">
                        <img className="w-full h-full object-cover rounded-md" src={'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg'} alt="" />

                        <div className="absolute rounded-md h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className='text-white'>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <ol>
                                    {
                                        stack.map((item = { name: '' }) => (
                                            <li key={item.name}>{item.name}</li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}