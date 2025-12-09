interface studies {
    isStudio: boolean
}

const experiences = [
    {
        year: 'Abr 2023 - Jun 2025',
        title: 'Desarrollador Frontend',
        company: 'Wigilabs',
        description:
            'Encargado del desarrollo de interfaces modernas y responsives totalmente funcionales, extrayendo y modificando información de los usuarios a través del consumo de endpoints, uso de arquitecturas de software para un código limpio y legible, trabajando bajo metodologías scrum, además creó y ejecutó pruebas unitarias para el buen comportamiento de cada funcionalidad, entre otras funciones.',
    },
    {
        year: 'Ene 2025 - Abr 2025',
        title: 'Desarrollador Fullstack',
        company: 'Autónomo',
        description:
            'Diseño y desarrollo de una aplicacion web para la gestion de productos, ventas, usuarios con roles, reportes y gastos de una farmacia. Utilizando React y bootstrap para el frontend, Python con Flask y MongoDB para el backend.',
    },
    {
        year: 'Feb 2022 - Mayo 2022',
        title: 'Desarrollador Fullstack',
        company: 'Autónomo',
        description:
            'Desarrollo de una aplicacion de escritorio para la gestion de inventarios, ventas, facturacion, etc. Utilizando Python y Tkinter, con una base de datos en SQLite.',
    }
]

const Studios = [
    {
        year: 'Jun 2021 - Dic 2022',
        title: 'Analista y desarrollador de software',
        company: 'SENA',
        description: ''
    }
]


export default function Timeline({isStudio}: studies) {
    return (
        <section className="py-8">
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                
                {isStudio ? Studios.map((exp, idx) => (
                    <div key={idx} className="mb-12 md:mb-16 relative pl-12 md:pl-16 group">
                        <span className="absolute left-1 top-7 w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>

                        <span className="absolute -left-2 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-[#0a0a1a] group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-blue-500/50"></span>

                        <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group-hover:translate-x-2">
                            <div className="inline-block px-6 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm text-blue-400 font-semibold">
                                {exp.year}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{exp.title}</h3>
                            <p className="text-base text-gray-400 mb-3 flex items-center gap-2">
                                <span className="text-purple-400">@</span>
                                <span className="font-semibold">{exp.company}</span>
                            </p>
                            {exp.description && <p className="text-gray-300 leading-relaxed">{exp.description}</p>}
                        </div>
                    </div>
                )) : experiences.map((exp, idx) => (
                    <div key={idx} className="mb-12 md:mb-16 relative pl-12 md:pl-16 group">
                        <span className="absolute left-1 top-7 w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>

                        <span className="absolute -left-2 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-[#0a0a1a] group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-blue-500/50"></span>

                        <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group-hover:translate-x-2">
                            <div className="inline-block px-6 py-2 mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm text-purple-400 font-semibold">
                                {exp.year}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{exp.title}</h3>
                            <p className="text-base text-gray-400 mb-3 flex items-center gap-2">
                                <span className="text-purple-400">@</span>
                                <span className="font-semibold">{exp.company}</span>
                            </p>
                            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
