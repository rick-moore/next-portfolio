import React from 'react'
import Image from 'next/image'
import styledJsx from '../styles/projects.styles.js'
import { motion } from 'framer-motion'

export default function ProjectTemplate({ project }) {
    const flyIn = {
        hidden: { x: -500 },
        visible: { 
            x: 0, 
            transition: {
                type: 'spring',
                duration: .8,
                staggerChildren: .2
            }
        },
    }

    const flyInChildren = {
        hidden: { 
            opacity: 0,
            x: -500 
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {duration: 0.3}
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={project.title} 
            className={`${styledJsx.className} project`}
        >   
            <motion.section 
                className={`${styledJsx.className} left_pane`}
                initial='hidden'
                animate='visible'
                variants={flyIn}
                
            >
                <motion.h1 className={`${styledJsx.className} project_h1`} variants={flyInChildren}>{project.title}</motion.h1>
                <motion.h2 className={`${styledJsx.className} project_h2`} variants={flyInChildren}>{project.description}</motion.h2>
                <motion.p className={`${styledJsx.className} project_p`} variants={flyInChildren}>
                    {project.subDescription}
                    <br /><br />
                    {project.details.map((detail, index) => 
                        <span key={index}>
                            <em className={`${styledJsx.className} project_p_em`}><b>{detail.title}</b></em> - {detail.description}
                            <br /><br />
                        </span>
                    )}
                </motion.p> 
                <motion.div className={`${styledJsx.className} cta_buttons`} variants={flyInChildren}>
                    <motion.button
                        className={`${styledJsx.className} cta_buttons_button button_1`}
                        type="button"
                        onClick={() => {
                            window.open(`${project.codeUrl}`, '_blank')
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ backgroundColor: '#062f36' }}
                    >
                        View Code
                    </motion.button>
                    {   
                        project.liveUrl ? 
                            <motion.button
                                className={`${styledJsx.className} cta_buttons_button button_2`}
                                type="button"
                                onClick={() => {
                                    window.open(`${project.liveUrl}`, '_blank')
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ backgroundColor: '#1c0f41' }}
                                >
                                Live App
                            </motion.button>
                        : null
                    }
                </motion.div>
            </motion.section>
            <motion.section 
                className={`${styledJsx.className} right_pane`}
                initial={{ x: 1500 }}
                animate={{ x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: 'spring',
                    delay: .3,
                    duration: .6
                }}
            >
                <div className={`${styledJsx.className} techlist`}>
                    {project.techs.map((tech, index) => 
                        <div className={`${styledJsx.className} techlist_item`} key={index} >
                            <Image
                                src={tech.svgUrl}
                                height='60' 
                                width='60' 
                                layout='fixed' 
                                alt={tech.altText}
                            />
                        </div>
                    )}
                </div>
                <Image 
                    src={project.mockup.url} 
                    alt={`${project.title} Mockups`} 
                    height={project.mockup.height} 
                    width={project.mockup.width} 
                    layout='fixed'
                    priority
                />
            </motion.section>
        </motion.div>
    )
}