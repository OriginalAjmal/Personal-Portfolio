import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ positon, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {
                    positon
                }&nbsp;<a href={companyLink}
                    target='_blank'
                className='text-primary dark:text-primaryDark capitalize'>@{company}</a>

            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'> 
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset : ["start end","center start"]
        }
    )
  return (
      <div className='my-64'>
          <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
              Experience
          </h2>
          <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
              
              <motion.div
                  style={{scaleY:  scrollYProgress}}
                  className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                  md:w-[2px] md:left-[30px] xs:left-[20px]
                  ' />

              <ul className='w-full flex flex-col item-start justify-between ml-4 xs:ml-2'>
                  <Details
                      positon="Front-End Developer" company="SpotLine"
                      companyLink="https://www.spotline.org/"
                  time="May 2022-October 2022 " address=" Las Vegas, Nevada"
                      work="Worked using dart and flutter to convert data to graphical interface, thereby creating web applications and sites that render on the client-side.
                  Handled the position of being the lead developer.Monitored application performance, oversaw traffic drops
                  related to usability, and prepared for other relevant issues"
                  />
                  <Details
                      positon="FrontEnd Developer" company="CoinMint"
                      companyLink="https://www.coinmint.fund/"
                  time="June 2022- August 2022 " address=" Bangalore, IN"
                  work="Worked closely with the creative (UI/UX) team to help
                  conceptualize and deliver applications and took them from
                  concept to completion. Implemented features using development process including
                  design review, code reviews, continuous integration and
                  automated testing."
                  />
                  <Details
                      positon="Coding Instructor" company="Dr.X Academy"
                      
                  time="October 2022 - February 2022 " address=" Mountain View, CA"
                  work="Teaching a group of students the concept of OOP and its usage in Robotics. Providing technical guidance and mentorship to students participating in the FTC competition."
                  />
                  <Details
                      positon="MERN Stack Developer" company="Self-Employed"

                  time="2021-Present " address=" Mountain View, CA"
                  work="As a self-employed MERN stack developer, your work involves developing web applications using MongoDB, Express.js, React, and Node.js. You analyze project requirements, design databases, develop server-side and client-side code, conduct testing and debugging, deploy applications, and provide ongoing maintenance and updates."
                  />
              </ul>
          </div>
      </div>
  )
}

export default Experience