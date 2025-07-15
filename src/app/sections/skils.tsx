const stackTech = [
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/javascript.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/typescript.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/react.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/next.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/angular.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/node+js',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/express-js.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/python.webp',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/django.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/flask.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/fastapi-logo.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/mysql.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/sqlite',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/mongodb.webp',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/tailwindcss.webp',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/boostrapt.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/sass.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/jest.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/Docker-Logo.png',
    'https://imagesportafliov2.s3.us-east-2.amazonaws.com/tecnologias/Git.png'
];

export function Skils() {
    return (
        <div className="">
            <p className="text-3xl text-center mb-20">Tecnologias</p>
            <div className="flex space-x-16 overflow-hidden group w-[66%] m-auto">
                <div className="flex items-center gap-2 animate-marquee space-x-16 group-hover:paused">
                    {[...stackTech, ...stackTech].map((text, idx) => (
                        <img className="w-[100px] h-[100px] object-contain max-w-none" key={idx} src={text} alt="" />
                    ))}
                </div>
                <div className="flex items-center gap-2 animate-marquee space-x-16 group-hover:paused" aria-hidden={true}>
                    {[...stackTech, ...stackTech].map((text, idx) => (
                        <img className="w-[100px] h-[100px] object-contain max-w-none" key={idx} src={text} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}