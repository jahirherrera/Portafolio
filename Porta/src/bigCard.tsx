import { useState } from "react";

interface BigCardProps{
    visible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BigCard({visible}:BigCardProps) {

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
            <div className='w-[80vw] h-[90vh]  grid grid-rows-[1fr_1fr] rounded-2xl shadow-xl/40 bg-radial-[at_25%_25%] from-slate-900 via-indigo-950 to-slate-900 to-90%' onClick={(e) => e.stopPropagation()}>
                <section
                    className="w-full p-5 grid gap-2 transition-all duration-300 "
                    style={{ gridTemplateColumns: changeSize(selected) }}
                >
                    <div className="bg-[url(./assets/firstProject/fpp1.png)] bg-cover bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl" onClick={() => setSelected(1)}></div>
                    <div className=" bg-[url(./assets/firstProject/fpp3.png)] bg-cover bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl" onClick={() => setSelected(2)}></div>
                    <div className="bg-[url(./assets/firstProject/fpp2.png)] bg-cover bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl" onClick={() => setSelected(3)}></div>
                    <div className="bg-[url(./assets/firstProject/fpp4.png)] bg-cover bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl" onClick={() => setSelected(4)}></div>
                    <div className=" bg-[url(./assets/firstProject/fpp5.png)] bg-cover bg-center  bg-no-repeat w-full h-full rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl" onClick={() => setSelected(5)}></div>
                </section>
                <section className="w-full text-2xl min-h-full grid grid-cols-1 md:grid-cols-3 justify-rounded text-white p-5 gap-2 overflow-y-auto">
                    <div className="flex flex-col   p-3 ">
                        <h1 className="pb-2">
                            Why kind of App is this?
                        </h1>
                        <p className="text-xl">
                            This is a chat application called Bytetalking, which allows users to create their own servers with customizable privacy settings (public or private). Users can also rank other profiles by awarding stars. The app includes numerous default public servers, enabling users to join and engage immediately
                        </p>
                    </div>
                    <div  className="flex flex-col p-3 pr-6 pl-6  border-r border-l border-white ">
                        <h1 className="pb-2">
                            Why Did I Create it?
                        </h1>
                        <p className="text-xl">
                            I created this chat application to gain hands-on experience building a real-time platform. Through this project, I learned how to design and manage public and private servers, implement user interactions, and structure a robust database to support dynamic features. This project allowed me to strengthen my skills in full-stack development while solving practical communication challenges.
                        </p>
                    </div>
                    <div  className="flex flex-col  p-2  ">
                        <h1 className="pb-2">
                            Technologies Used
                        </h1>
                        <p className="text-xl">
                            The frontend of the application was built using TypeScript with React, while the backend leverages Java Spring Boot. PostgreSQL was used for the database to ensure reliable data storage. Additionally, I implemented key technologies such as OAuth2, JWT authentication, cookies, localStorage, WebSockets, and STOMP.js, among others, to provide secure, real-time, and dynamic functionality throughout the app.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}