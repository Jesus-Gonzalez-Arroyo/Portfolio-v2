import { FaGithub } from 'react-icons/fa'

interface StackItem {
  name: string;
}

interface CardProjectProps {
  title: string;
  description: string;
  stack: StackItem[];
}

export function CardProject({stack=[], title="", description=""}: CardProjectProps) {
    return (
        <div className="bg-blue-400 p-5 rounded-md h-[380px]">
            <div className="w-full">
                <img className="w-full h-[150px] object-cover rounded-md" src={'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg'} alt="" />
            </div>
            <div className="flex gap-10 py-5 text-white">
                <div>
                    <div className="w-[70%]">
                        <p className="text-lg mb-3">{title}</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <FaGithub size={28} />
                    </div>
                </div>
                <div className="w-[30%]">
                    <p className="text-lg mb-3">Tecnologias</p>
                    <div>
                        <ul className="flex flex-wrap gap-3">
                            {
                                stack.map((item = {name: ''}) => (
                                    <li key={item.name} className="w-20 rounded-md bg-blue-200 text-center">{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}