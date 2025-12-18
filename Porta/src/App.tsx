import './App.css'
import video from "./assets/video.mp4"
import BigCard from './bigCard';
import { Activity, useState } from 'react';
//@ts-ignore
import sprite from './assets/sprite.svg';
import DisappearingDiv from './disappiring';

function App() {

  const [firstBigCard, setFirstBigCard] = useState<boolean>(false);
  const [globalText,SetGlobalText] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  function copping(text:string){
    SetGlobalText(text);
    setShow(true);
  }
  {/* 
    Things to do :
    separate components
    improve/fixed the UI
    addd the BigCard for every card

  */}
  return (
    <>
      <div className=''>
        <video className='fixed inset-0 top-0 left-0 w-full h-full object-cover' loop autoPlay muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className='relative '>
          <div className='text-indigo-600 flex gap-2 text-xl p-2'>
              <a href='#home' className='hover:scale-105 hover:border-b hover:cursor-pointer border-indigo-500 transition-all ease-in-out'>Home</a>
              <a href='#projects' className='hover:scale-105 hover:border-b hover:cursor-pointer border-indigo-500 transition-all ease-in-out'>Projecs</a>
              <a href='#about' className='hover:scale-105 hover:border-b hover:cursor-pointer border-indigo-500 transition-all ease-in-out'>About Me</a>
              <a href='#contact' className='hover:scale-105 hover:border-b hover:cursor-pointer border-indigo-500 transition-all ease-in-out'>Contact me</a>
          </div>
          <header id='home' className='flex flex-col justify-center items-center w-full h-screen  text-white'>
            <div className='w-60 h-60 rounded-full bg-[url(./assets/pic.png)] bg-cover bg-center bg-no-repeat mb-2'></div>
            <h1 className='text-5xl inline mb-2'> Hi, I'm <span className='text-indigo-700 mr-3 ml-3'>Jahir</span> Herrera</h1>
            <h3 className='pt-4 max-w-2xl text-xl text-center'>I’m a full-stack developer skilled in Java, JavaScript, and TypeScript, building scalable backend systems and modern, responsive front-end applications. I focus on writing clean, maintainable code and delivering solutions that are fast, reliable, and user-friendly.</h3>
          </header>
          <section id='projects' className='flex flex-col justify-center items-center '>
            <h1 className='text-indigo-700 text-4xl p-10'>
              Stack
            </h1>
            <div className='flex  flex-wrap justify-center items-center gap-5  m-10 '>
              <svg width="80" height="80" className="hover:cursor-pointer  ">
                <use href={`${sprite}#CSS`} />
              </svg>
              <svg width="88" height="88" className="hover:cursor-pointer ">
                <use href={`${sprite}#HTML`} />
              </svg>
              <svg width="86" height="86" className="hover:cursor-pointer ">
                <use href={`${sprite}#JS`} />
              </svg>
              <svg width="80" height="80" className="hover:cursor-pointer" >
                <use href={`${sprite}#react`} />
              </svg>
              <svg width="80" height="80" className="hover:cursor-pointer ">
                <use href={`${sprite}#typescript`} />
              </svg>
              <svg width="94" height="94" className=" hover:cursor-pointer">
                <use href={`${sprite}#Java`} />
              </svg>
              <svg width="86" height="86" className="hover:cursor-pointer ">
                <use href={`${sprite}#SB`} />
              </svg>
              <svg width="84" height="84" className="hover:cursor-pointer" >
                <use href={`${sprite}#SQL`} />
              </svg>
              <svg width="98" height="98" className="hover:cursor-pointer ">
                <use href={`${sprite}#Docker`} />
              </svg>
              <svg width="90" height="90" className="hover:cursor-pointer ">
                <use href={`${sprite}#github`} />
              </svg>

            </div>
            <p className='border border-indigo-700 w-full m-10'></p>
          </section>
          <section className='flex flex-col justify-center items-center w-full pb-10'>
            <h1 className='text-indigo-700 text-4xl p-10'>Projects</h1>
            <div className='w-[80%] flex flex-wrap justify-around '>
              <div className='w-100 h-120 m-2  rounded-3xl flex flex-col justify-between items-center hover:cursor-pointer hover:scale-110 transform ease-in-out transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white'
                onClick={() => { firstBigCard ? setFirstBigCard(false) : setFirstBigCard(true) }}>
                <div className='w-full h-50 rounded-t-3xl bg-[url(./assets/chatapp.png)] bg-contain border-b-2 border-black' >

                </div>
                <h1 className='text-xl font-bold p-1'>
                  Chat App (ByteTalk)
                </h1>
                <h1 className='text-xl font-bold p-1 text-indigo-700'>
                  FullStack App
                </h1>
                <div className='flex gap-0.5'>
                  <h1 className='text-xl font-bold p-1 text-indigo-700'>Stack used: </h1>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#CSS`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#HTML`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#typescript`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer" >
                    <use href={`${sprite}#react`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#Java`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer" >
                    <use href={`${sprite}#SB`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#SQL`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#github`} />
                  </svg>
                </div>
                <button className='w-40 bg-indigo-700 text-white font-bold rounded-2xl mb-2'> Click To View More</button>
              </div>
              <div className='w-100 h-120 m-2 rounded-3xl flex flex-col justify-between items-center hover:cursor-pointer hover:scale-110 transform ease-in-out transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white'>
                <div className='w-full h-50 rounded-t-3xl bg-[url(./assets/monkeytype.png)] bg-contain border-b-2 border-black' >

                </div>
                <h1 className='text-xl font-bold p-1'>
                  MonkeyType (ProgrammerType)
                </h1>
                <h1 className='text-xl font-bold p-1 text-indigo-700'>
                  FullStack App
                </h1>
                <div className='flex gap-0.5'>
                  <h1 className='text-xl font-bold p-1 text-indigo-700'>Stack used: </h1>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#CSS`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#HTML`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#typescript`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer" >
                    <use href={`${sprite}#react`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#Java`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer" >
                    <use href={`${sprite}#SB`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#SQL`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#github`} />
                  </svg>
                </div>
                <button className='w-40 bg-indigo-700 text-white font-bold rounded-2xl mb-2'> Click To View More</button>
              </div>
              <div className='w-100 h-120 m-2 rounded-3xl flex flex-col justify-between items-center hover:cursor-pointer hover:scale-110 transform ease-in-out transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white'>
                <div className='w-full h-50 rounded-t-3xl bg-[url(./assets/project3.png)] bg-contain border-b-2 border-black' >

                </div>
                <h1 className='text-xl font-bold p-1'>
                  Algorightm Vizualizer
                </h1>
                <h1 className='text-xl font-bold p-1 text-indigo-700'>
                  Data structures and Visualization
                </h1>
                <div className='flex gap-0.5'>
                  <h1 className='text-xl font-bold p-1 text-indigo-700'>Stack used: </h1>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#CSS`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#HTML`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#JS`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer" >
                    <use href={`${sprite}#react`} />
                  </svg>
                  <svg width="24" height="24" className="hover:cursor-pointer ">
                    <use href={`${sprite}#github`} />
                  </svg>
                </div>
                <button className='w-40 bg-indigo-700 text-white font-bold rounded-2xl mb-2'> Click To View More</button>
              </div>
            </div>
          </section> {/* 050E3C , 132440, 30475E  */}
          <section id='about' className='w-full min-h-screen  text-white flex flex-col  p-6 '>
            <h1 className='text-4xl pt-10 pl-10 pb-1 border-b border-indigo-600 max-w-60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]'>About Me</h1>
            <div className='flex flex-col justify-around h-full mb-3'>
              <div className='text-3xl p-10 rounded-2xl shadow-2xl'>
                <h1 className='max-w-2xl text-xl font-bold pb-3'>
                  Who Am I?
                </h1>
                <h2 className='text-2xl leading-relaxed p-1'>
                  My programming journey began in <span className='text-indigo-500 text-2xl'> 2017 </span>, when I started studying <span className='text-indigo-500 text-2xl'> Computer Engineering </span> in Colombia. After two years of study, life circumstances required me to pause my education and relocate to the United States.

                  In 2022, I decided to continue the path I had started by returning to school. I enrolled at <span className='text-indigo-500 text-2xl'> St. Petersburg College</span>, where I graduated with a degree in <span className='text-indigo-500 text-2xl'> Computer & Information Science.</span> I also completed the required coursework to transfer to the <span className='text-indigo-500 text-2xl'>University of South Florida</span>, where I am currently pursuing a <span className='text-indigo-500 text-2xl'>Computer Science </span> degree.

                  These experiences strengthened my resilience and reinforced my commitment to building a career in software development through continuous learning and hands-on projects.

                </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-3'>
                <div className=' rounded-2xl p-8 text-2xl  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]'>
                  <h1 className='text-3xl font-bold pb-3'>
                    Education
                  </h1>
                  <div className='p-4 '>
                    <h1>Research and Development University, Colombia 2017-2019</h1>
                    <p>
                      Computer Engineering
                    </p>
                  </div>
                  <div className='p-4 '>
                    <h1>St Petersburg College, St Petersburg, FL 2023-2025</h1>
                    <p>
                      Associate in Science (A.S.) – Computer & Information Science
                    </p>
                  </div>
                  <div className='p-4 ' >
                    <h1>University of South Florida, Tampa, FL 2026-</h1>
                    <p>
                      Bachelor’s Degree (B.S.) – Computer Science
                    </p>
                  </div>



                </div>
                <div className='text-2xl  rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]'>
                  <h1 className='text-3xl font-bold pb-3'>
                    Experience
                  </h1>
                  <h2 className='text-2xl p-1 leading-relaxed'>
                    Although I do not yet have formal professional experience, I have built multiple projects that demonstrate my ability to solve problems and develop practical, real-world solutions. I bring a high level of motivation, passion for software development, and strong enthusiasm to begin my professional career in the tech industry.
                  </h2>
                </div>
              </div>
            </div>

          </section>
          <footer id='contact' className='p-5 flex flex-col border-t border-indigo-700'>
            <h1 className=' flex flex-row text-indigo-700 justify-center p-5 text-4xl font-bold'>Contact me</h1>
            <div className='flex flex-row justify-around p-4 m-1'>{/*  improve the ui when you copy eihter the phone number or email */}
              <p className='flex  justify-center items-center' onClick={()=>{navigator.clipboard.writeText("7272779828");copping("you have copied the number succefully")}}>
                <svg width="70" height="70" className="hover:cursor-pointer ">
                  <use href={`${sprite}#phone`} />
                </svg>
              </p>
              <p className=' flex  justify-center items-center' onClick={() => { navigator.clipboard.writeText("Jahirherrera12345@gmail.com"); copping("you have copied the email succefully") }}>
                <svg width="70" height="70" className="hover:cursor-pointer ">
                  <use href={`${sprite}#gmail`} />
                </svg>
              </p>
              <p className='hover:cursor-pointer' onClick={() => window.open("https://github.com/jahirherrera")}>
                <svg width="70" height="70" className="hover:cursor-pointer ">
                  <use href={`${sprite}#github`} />
                </svg>
              </p>
              <p onClick={() => window.open("https://www.linkedin.com/in/jahir-herrera-222967373/")}>
                <svg width="70" height="70" className="hover:cursor-pointer ">
                  <use href={`${sprite}#linkedin`} />
                </svg>
              </p>
            </div>
          </footer>
        </div>
        <Activity mode={firstBigCard ? "visible" : "hidden"}>
          <BigCard visible={setFirstBigCard} />
        </Activity>

        {
          show && <DisappearingDiv key={globalText} text={globalText} />
        }

      </div>
    </>
  )
}

export default App
