const stackTech = [
    { name: 'JavaScript', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/javascript.png' },
    { name: 'TypeScript', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/typescript.png' },
    { name: 'React', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/react.png' },
    { name: 'Next.js', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/next.png' },
    { name: 'Angular', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/angular.png' },
    { name: 'Node.js', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/node+js' },
    { name: 'Express', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/express-js.png' },
    { name: 'NestJS', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/nest-logo.svg' },
    { name: 'Python', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/python.webp' },
    { name: 'Django', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/django.png' },
    { name: 'Flask', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/flask.png' },
    { name: 'FastAPI', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/fastapi-logo.png' },
    { name: 'MySQL', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/mysql.png' },
    { name: 'MongoDB', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/mongodb.webp' },
    { name: 'PostgreSQL', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/postgresql-logo.png' },
    { name: 'Redis', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/redis-1-768x512.png' },
    { name: 'Tailwind', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/tailwindcss.webp' },
    { name: 'Bootstrap', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/boostrapt.png' },
    { name: 'Sass', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/sass.png' },
    { name: 'Jest', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/jest.png' },
    { name: 'Docker', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/Docker-Logo.png' },
    { name: 'Git', url: 'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/Git.png' }
];

export function Skils() {
    return (
        <div className="relative py-20 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 mb-16">
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-2 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></span>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Tecnologías
                        </h2>
                        <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Stack tecnológico con el que trabajo para crear soluciones innovadoras
                    </p>
                </div>
            </div>

            <div className="relative">        
                <div className="flex space-x-8 overflow-hidden group">
                    <div className="flex items-center gap-8 animate-marquee space-x-8 group-hover:paused">
                        {[...stackTech, ...stackTech].map((tech, idx) => (
                            <div 
                                key={idx} 
                                className="group/item flex-shrink-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 min-w-[140px]"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <img 
                                            className="w-full h-full object-contain max-w-none transition-transform duration-300 group-hover/item:scale-110" 
                                            src={tech.url} 
                                            alt={tech.name}
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-300 text-center group-hover/item:text-white transition-colors">
                                        {tech.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-8 animate-marquee space-x-8 group-hover:paused" aria-hidden={true}>
                        {[...stackTech, ...stackTech].map((tech, idx) => (
                            <div 
                                key={idx} 
                                className="group/item flex-shrink-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 min-w-[140px]"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <img 
                                            className="w-full h-full object-contain max-w-none transition-transform duration-300 group-hover/item:scale-110" 
                                            src={tech.url} 
                                            alt={tech.name}
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-300 text-center group-hover/item:text-white transition-colors">
                                        {tech.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}