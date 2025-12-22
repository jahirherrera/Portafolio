import sprite from './assets/sprite.svg';

interface cardProps {
    image: string;
    title: string;
    type: string;
    stack: string[];
    showing : ()=>void;
}

export default function Card({ image, title, type, stack, showing }: cardProps) {


    const clicking =()=>{
        showing();
    }

    return (
        <div onClick={clicking} className='w-100 h-120 m-2 rounded-3xl flex flex-col justify-between items-center hover:cursor-pointer hover:scale-110 transform ease-in-out transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white'>
            <div className={`w-full h-50 rounded-t-3xl bg-contain border-b-2 border-black`} style={{ backgroundImage: `url(${image})` }}>

            </div>
            <h1 className='text-xl font-bold p-1'>
                {title}
            </h1>
            <h1 className='text-xl font-bold p-1 text-indigo-700'>
                {type}
            </h1>
            <div className='flex gap-0.5'>
                <h1 className='text-xl font-bold p-1 text-indigo-700'>Stack used: </h1>
                {
                    stack.map((name,index )=> (
                        <svg key={index} width="24" height="24" className="hover:cursor-pointer ">
                            <use href={`${sprite}#${name}`} />
                        </svg>
                    ))
                }
            </div>
            <button className='w-40 bg-indigo-700 text-white font-bold rounded-2xl mb-2'> Click To View More</button>
        </div>
    )
}