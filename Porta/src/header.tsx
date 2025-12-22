export default function Header(){
    return (
        <header id='home' className='flex flex-col justify-center items-center w-full h-screen  text-white'>
            <div className='w-60 h-60 rounded-full bg-[url(./assets/pic.png)] bg-cover bg-center bg-no-repeat mb-2'></div>
            <h1 className='text-5xl inline mb-2'> Hi, I'm <span className='text-indigo-700 mr-3 ml-3'>Jahir</span> Herrera</h1>
            <h3 className='pt-4 max-w-2xl text-xl text-center'>I’m a full-stack developer skilled in Java, JavaScript, and TypeScript, building scalable backend systems and modern, responsive front-end applications. I focus on writing clean, maintainable code and delivering solutions that are fast, reliable, and user-friendly.</h3>
        </header>
    )
}