import { useState } from "react";

interface BigCardProps{
    visible: React.Dispatch<React.SetStateAction<boolean>>;
    images : string[];
    para :string[];
}

export default function BigCard({visible,images, para}:BigCardProps) {

    const [selected, setSelected] = useState<number>(3);


    function changeSize(col: number): string {
        if (col === 1) return "8fr 1fr 1fr 1fr 1fr";
        if (col === 2) return "1fr 8fr 1fr 1fr 1fr";
        if (col === 3) return "1fr 1fr 8fr 1fr 1fr";
        if (col === 4) return "1fr 1fr 1fr 8fr 1fr";
        if (col === 5) return "1fr 1fr 1fr 1fr 8fr";
        return "1fr 1fr 8fr 1fr 1fr";
    }


    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900/80 flex justify-center items-center text-black" onClick={()=>visible(false)}>
            <div className='w-[80vw] h-[90vh]  grid grid-rows-[6fr_4fr] rounded-2xl shadow-xl/40 bg-radial-[at_25%_25%] from-slate-900 via-indigo-950 to-slate-900 to-90%' onClick={(e) => e.stopPropagation()}>
                <section
                    className="w-full p-5 grid gap-2 transition-all duration-300 "
                    style={{ gridTemplateColumns: changeSize(selected) }}
                >
                    {
                        images.map((image,index) => (
                            <div key={index}  
                            className={`bg-cover  bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl`}
                            style={{ backgroundImage: `url(${image})` }}  
                            onClick={() => setSelected(index+1)}></div>
                        ))
                    }
                </section>
                <section className="w-full text-2xl min-h-full grid grid-cols-1 md:grid-cols-3 justify-rounded text-white p-5 gap-2 overflow-y-auto">
                    <div className="flex flex-col   p-3 ">
                        <h1 className="pb-2">
                            Why kind of App is this?
                        </h1>
                        <p className="text-xl">
                            {para[0]}
                        </p>
                    </div>
                    <div  className="flex flex-col p-3 pr-6 pl-6  border-r border-l border-white ">
                        <h1 className="pb-2">
                            Why Did I Create it?
                        </h1>
                        <p className="text-xl">
                            {para[1]}
                        </p>
                    </div>
                    <div  className="flex flex-col  p-2  ">
                        <h1 className="pb-2">
                            Technologies Used
                        </h1>
                        <p className="text-xl">
                            {para[2]}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}