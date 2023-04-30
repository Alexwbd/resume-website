import Layout from './components/Layout';
import styles from '@/styles/Home.module.css'
const About = () => {
    return <Layout>
        <div className="flex justify-center items-center w-screen h-screen ">
          
            <div className=" mt-10  flex justify-center items-center py-4"  >
                <div className=" bg-darker w-3/5 p-3  rounded-smr shadow-md sm:w-full">
                <h1 className="mb-6">About Me</h1>
                    <p className=" text-sm">
        
                            I am a self-taught web developer with a passion for learning and creating engaging user experiences. I started programming about 3 years ago in a completely different programming language, but I quickly fell in love with web development after discovering the power of HTML, CSS, and JavaScript.
                            Since then, I have been dedicated to honing my skills and exploring new technologies. 
                    </p>
                    <p className="mt-5 text-sm  ">
        
                            I have experience with React, Next.js, Framer Motion, and Tailwind CSS, and I am always eager to learn more.
                            While I may not have any formal job experience yet, I am highly motivated and always looking for ways to challenge myself and improve my skills.
                            Thank you for visiting my portfolio!
                    </p>
                    <br/>
                    <br/>
                    <h2>Contact information</h2>
                    <br/>
                            <p className="text-sm">Alex-Jobb94@outlook.com</p>
                </div>
              </div>
            </div>
    </Layout>
}
export default About;