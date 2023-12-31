import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import profilePic from "../../public/images/profile/developer-pic-4.png"
import Image from 'next/image'
import Skills from '@/Components/Skills'
import Experience from '@/Components/Experience'
import Education from '@/Components/Education'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/Components/TransitionEffect'


// const AnimatedNumbers = ({ value }) => {
//     const ref = useRef(null);

//     const motionValue = useMotionValue(0);
//     const springvalue = useSpring(motionValue, { duration: 1000 })
//     const isInView = useInView({ref});
    
//     useEffect(() => {
//         if (isInView) {
//             motionValue.set(value);
//        }
//     },[isInView,value,motionValue]
//     )

//     useEffect(() => {
//         springvalue.on("change", (latest) => {
//             if (ref.current && latest.toFixed(0) <= value) {
//                 ref.current.textContent = latest.toFixed(0);
//             }
//         })
//     },[springvalue,value])

//     return <span></span>
// }


const about = () => {
  return (
      <>
          <Head>
              <title>
                  Ajmal Husain  | About Page
              </title>
              <meta name="description" content="any description" />
          </Head>
          <TransitionEffect />
          <main className='flex w-full flex-col items-center justify-center dark:text-light'>
              <Layout className='pt-16'>
                  <AnimatedText text=' Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                  <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                      <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'> BioGraphy</h2>
                          <p className='font-medium'>
                          Hello, I am Ajmal Husain, a highly skilled Full Stack developer specializing in web and mobile application development. With my expertise in front-end technologies such as HTML, CSS, and JavaScript frameworks like React.js and Angular, I create visually stunning and user-friendly interfaces. On the back-end, I have a strong command of server-side programming languages like Node.js and PHP, along with database management and API integration. </p>       
                          <p className='my-4 font-medium'>
                          I am particularly adept at mobile application development, leveraging cross-platform frameworks like React Native and Flutter to build high-performance apps for both iOS and Android platforms. My attention to detail, commitment to code quality, and focus on delivering seamless user experiences set me apart.</p>
                          <p className='my-4 font-medium'>
                          With a collaborative mindset, I thrive in team environments, working closely with stakeholders to understand project requirements and ensure successful outcomes. Continuous learning is a core value of mine, and I stay up to date with the latest industry trends to provide innovative solutions. </p>
                           <p className=' font-medium'>
                           If you are seeking a dedicated Full Stack developer to bring your web or mobile projects to life, I am confident in my ability to deliver exceptional results. Let's work together to create impactful digital experiences that exceed your expectations.</p>
                          
                      </div>
                      
                      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
                      bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                      '>
                          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                          <Image src={profilePic} alt='AjmalHusain' className='w-full h-auto rounded-2xl'
                          priority
                          sizes="(max-width:768px) 100vw,
                          (max-width:1200px) 50vw,
                          33vw"/>
                      </div>
                      <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                  {/* <AnimatedNumbers value={50} />+ */}
                                  25+
                              </span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                  Satisfied Clients
                              </h2>
                          </div>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                  {/* <AnimatedNumbers value={40} />+ */}
                                  20+
                              </span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                  Projects Completed
                              </h2>
                          </div>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                  {/* <AnimatedNumbers value={4} />+ */}
                                  3+
                              </span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                  Years of experience
                              </h2>
                          </div>
</div>
                  </div>

                  <Skills />
                  <Experience />
                  <Education />
              </Layout>
      </main>
      </>
  )
}

export default about