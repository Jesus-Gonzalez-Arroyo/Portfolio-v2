const stackTech = [
    'https://img.icons8.com/color/512/javascript.png',
    'https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
    'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x617-rl2bcqfj.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png',
    'https://img.icons8.com/color/512/express-js.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256',
    'https://static-00.iconduck.com/assets.00/flask-icon-399x512-v0hqbifs.png',
    'https://files.svgcdn.io/logos/fastapi.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png?f=webp&w=256',
    'https://static-00.iconduck.com/assets.00/sqlite-icon-2048x909-7nkrc3bm.png',
    'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png',
    'https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png',
    'https://camo.githubusercontent.com/ecd695fb1ffadab6633f9fcdffaeebc58f3cca722260f0dec7dc607bd9d0e740/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67',
    'https://img.icons8.com/color/512/sass.png',
    'https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png'
];

export function Skils() {
    return (
        <div className="">
            <p className="text-3xl text-center mb-20">Tecnologias</p>
            <div className="flex space-x-16 gap-5 overflow-hidden group w-[80%] m-auto">
                <div className="flex items-center gap-10 animate-marquee space-x-16 group-hover:paused">
                    {[...stackTech, ...stackTech].map((text, idx) => (
                            <img loading="lazy" className="w-30 h-30 object-contain max-w-none" key={idx} src={text} alt="" />
                    ))}
                </div>
                <div className="flex items-center gap-10 animate-marquee space-x-16 group-hover:paused" aria-hidden={true}>
                    {[...stackTech, ...stackTech].map((text, idx) => (
                            <img loading="lazy" className="w-30 h-30 object-contain max-w-none" key={idx} src={text} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}