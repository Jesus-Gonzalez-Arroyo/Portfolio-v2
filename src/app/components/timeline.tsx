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
        <section className="py-16">
            <div className="border-l-3 border-white pl-6 relative">
                {isStudio ? Studios.map((exp, idx) => (
                    <div key={idx} className="mb-16 relative">
                        <span className="absolute border-1 border-white top-[19px] w-[45px] -left-[25px]"></span>
                        <span className="absolute -left-[33px] top-3 w-4 h-4 rounded-full bg-white"></span>

                        <div className="inline-block px-10 py-3 mb-4 rounded-full border border-gray-500 text-xs text-blue-500 font-semibold ml-5">
                            {exp.year}
                        </div>

                        <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">@ {exp.company}</p>
                        <p className="text-gray-300 w-[20%]">{exp.description}</p>
                    </div>
                )) : experiences.map((exp, idx) => (
                    <div key={idx} className="mb-16 relative">
                        <span className="absolute border-1 border-white top-[19px] w-[45px] -left-[25px]"></span>
                        <span className="absolute -left-[33px] top-3 w-4 h-4 rounded-full bg-white"></span>

                        <div className="inline-block px-10 py-3 mb-4 rounded-full border border-gray-500 text-xs text-blue-500 font-semibold ml-5">
                            {exp.year}
                        </div>

                        <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">@ {exp.company}</p>
                        <p className="text-gray-300">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
