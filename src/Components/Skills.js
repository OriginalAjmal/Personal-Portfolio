import React from 'react'
import { motion } from "framer-motion"

const Skill = ({name,x,y}) => {
    
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
              xs:text-dark xs:text xs:dark:text-light xs:font-bold
        '

            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y ,transition:{duration:1.5}}}
            
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
      <>
          <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>
              Skills
          </h2>
          <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
          lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm
          '>
              
              <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
              p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
              
'
                  whileHover={{scale: 1.05}}
              >
                  Web
              </motion.div>
              <Skill name="HTML" x="-25vw" y="2vw" />
              <Skill name="Node.Js" x="16vw" y="7vw" />
              <Skill name="PHP" x="15vw" y= "-8vw" />
              <Skill name="Nue.Js" x="15vw" y="18vw" />
              <Skill name="Angular.Js" x="-12vw" y= "8vw" />
              <Skill name="JavaScript" x="20vw" y="-18vw" />
              <Skill name="ReactJS" x="0vw" y= "11vw" />
              <Skill name="NextJS" x="-20vw" y= "-15vw" />
              <Skill name="Web Design" x="32vw" y="-5vw" />
              <Skill name="Python" x="-12vw" y= "-20vw" />
              <Skill name="Git" x="29vw" y= "7vw" />
              
              <Skill name="Figma" x="0vw" y= "-22vw" />
              <Skill name="FireBase" x="29vw" y="17vw" />
              <Skill name="Flutter" x="-25vw" y= "17vw" />
              <Skill name="Tailwind CSS" x="-0vw" y= "25vw" />
              <Skill name="CSS" x="-5vw" y= "-10vw" />
          </div>
      </>
  )
}

export default Skills