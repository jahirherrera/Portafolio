import './App.css'
import Header from './header';
import SquareBottom from './squareBottom';
import video from "./assets/video.mp4"
import BigCard from './bigCard';
import { Activity, useState } from 'react';
import sprite from './assets/sprite.svg';
import DisappearingDiv from './disappiring';
import SquareTop from './squareTop';
import SquareBL from './squareBL';
import Card from './card';
import fpp1 from './assets/firstProject/fpp1.png';
import fpp3 from './assets/firstProject/fpp3.png';
import fpp2 from './assets/firstProject/fpp2.png';
import fpp4 from './assets/firstProject/fpp4.png';
import fpp5 from './assets/firstProject/fpp5.png';
import spp1 from './assets/secondProject/spp1.png';
import spp2 from './assets/secondProject/spp2.png';
import spp3 from './assets/secondProject/spp3.png';
import spp4 from './assets/secondProject/spp4.png';
import spp5 from './assets/secondProject/spp5.png';
import tpp1 from './assets/thirdProject/tpp1.png';
import tpp2 from './assets/thirdProject/tpp2.png';
import tpp3 from './assets/thirdProject/tpp3.png';
import tpp4 from './assets/thirdProject/tpp4.png';
import tpp5 from './assets/thirdProject/tpp5.png';
import image1 from './assets/chatapp.png';
import image2 from './assets/monkeytype.png';
import image3 from './assets/project3.png';

function App() {

  const [showBigCard, setShowBigCard] = useState<boolean>(false);
  const [globalText, SetGlobalText] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [para, setPara] = useState<string[]>([]);

  const imagesP1 = [fpp1, fpp3,fpp2,fpp4,fpp5];
  const paraP1 = ['This is a chat application called Bytetalking, which allows users to create their own servers with customizable privacy settings (public or private). Users can also rank other profiles by awarding stars. The app includes numerous default public servers, enabling users to join and engage immediately', 'I created this chat application to gain hands on experience building a real-time platform. Through this project, I learned how to design and manage public and private servers, implement user interactions, and structure a robust database to support dynamic features. This project allowed me to strengthen my skills in full-stack development while solving practical communication challenges.', 'The frontend of the application was built using TypeScript with React, while the backend leverages Java Spring Boot. PostgreSQL was used for the database to ensure reliable data storage. Additionally, I implemented key technologies such as OAuth2, JWT authentication, cookies, localStorage, WebSockets, and STOMP.js, among others, to provide secure, real-time, and dynamic functionality throughout the app.'];
  const imagesP2 = [spp1,spp2,spp3,spp4,spp5];
  const paraP2 = ['This is a typing practice application inspired by Monkeytype, designed to help users improve their typing speed and accuracy. The app allows users to take timed typing tests, track their performance metrics (such as WPM and accuracy), and manage their profiles securely. Authenticated users can access personalized features, while the clean and responsive interface ensures an engaging and distraction free typing experience.','I created this application to deepen my understanding of building user focused, performance driven web applications. Through this project, I focused on authentication flows, user session management, and secure account recovery. Implementing features like password reset via email helped me gain practical experience with real-world authentication scenarios, while reinforcing my full-stack development skills and attention to security best practices.','The frontend of the application was built using TypeScript with React, while the backend was developed using Java Spring Boot. PostgreSQL was used for reliable and scalable data storage. I implemented authentication and security features using OAuth2, JWT, cookies, and localStorage. For account recovery, I integrated JavaMailSender to handle the “forgot password” functionality via email. These technologies work together to provide a secure, responsive, and user-friendly typing platform.']
  const imagesP3 = [tpp1,tpp2,tpp3,tpp4,tpp5];
  const paraP3 = ['This is an algorithm visualization application designed to help users understand how common algorithms work step by step. The app visually demonstrates sorting and searching algorithms in real time, allowing users to observe how data changes during each operation. Implemented algorithms include Bubble Sort, Insertion Sort, Quick Sort, A* pathfinding, Binary Search, and Interpolation Search, making the platform a practical learning tool for algorithm fundamentals.', 'I created this application to reinforce my understanding of algorithms and data structures through visual and interactive representations. By transforming abstract algorithmic logic into animations, I gained deeper insight into algorithm behavior, performance characteristics, and trade offs. This project also strengthened my frontend development skills, particularly in state management, rendering optimization, and building intuitive educational interfaces.', 'The application was built entirely using JavaScript with React, focusing exclusively on frontend development. Core concepts such as state management, component based architecture, and animation handling were used to simulate algorithm execution in real time. This frontend-only approach allowed me to concentrate on performance, visualization clarity, and user interaction without relying on backend services.']
  
  function copping(text: string) {
    SetGlobalText(text);
    setShow(true);
  }

  function sendProps(i: string[], p: string[]) {
    setImages(i);
    setPara(p);
    setShowBigCard(true)
  }



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
          <Header />
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
              <Card image={image1} title='Chat App (ByteTalk)' type='FullStack App' stack={['CSS', 'HTML', 'typescript', 'react', 'Java', 'SB', 'SQL', 'github']} showing={() => sendProps(imagesP1, paraP1)} />
              <Card image={image2} title='MonkeyType (ProgrammerType)' type='FullStack App' stack={['CSS', 'HTML', 'typescript', 'react', 'Java', 'SB', 'SQL', 'github']} showing={() => sendProps(imagesP2, paraP2)} />
              <Card image={image3} title='Algorightm Vizualizer' type='Data structures and Visualization' stack={['CSS', 'HTML', 'JS', 'react', 'github']} showing={() => sendProps(imagesP3,paraP3)} />
            </div>
          </section> {/* 050E3C , 132440, 30475E  */}
          <section id='about' className='w-full min-h-screen  text-white flex flex-col  p-6 '>
            <h1 className='text-4xl pt-10 pl-10 pb-1 border-b border-indigo-600 max-w-60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]'>About Me</h1>
            <div className='flex flex-col justify-around h-full mb-3'>
              <SquareTop />


              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-3'>
                <SquareBL />
                <SquareBottom />
              </div>
            </div>

          </section>
          <footer id='contact' className='p-5 flex flex-col border-t border-indigo-700'>
            <h1 className=' flex flex-row text-indigo-700 justify-center p-5 text-4xl font-bold'>Contact me</h1>
            <div className='flex flex-row justify-around p-4 m-1'>{/*  improve the ui when you copy eihter the phone number or email */}
              <p className='flex  justify-center items-center' onClick={() => { navigator.clipboard.writeText("7272779828"); copping("you have copied the number succefully") }}>
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
        <Activity mode={showBigCard ? "visible" : "hidden"}>
          <BigCard visible={setShowBigCard} images={images} para={para} />
        </Activity>

        {
          show && <DisappearingDiv key={globalText} text={globalText} />
        }

      </div>
    </>
  )
}

export default App
