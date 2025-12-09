export function Dates () {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                <div className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                    <div className="relative flex flex-col items-center text-center">
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                            <p>3</p>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-gray-300">
                            <p>Años de</p>
                            <p>Experiencia</p>
                        </div>
                    </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div>
                    <div className="relative flex flex-col items-center text-center">
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
                            <p>+5</p>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-gray-300">
                            <p>Clientes</p>
                            <p>Satisfechos</p>
                        </div>
                    </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-pink-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-blue-500/0 group-hover:from-pink-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                    <div className="relative flex flex-col items-center text-center">
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            <p>+20</p>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-gray-300">
                            <p>Proyectos</p>
                            <p>Completados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}