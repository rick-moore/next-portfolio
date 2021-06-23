import React from 'react'
import styles from '../styles/Landing.module.css'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import rickAvatar from '../public/rick-avatar.svg'
import logo from '../public/SVGLogo.svg'

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.logo}>
                <Image
                src={logo}
                alt='Logo'
                ></Image>
            </div>
            <div className={styles.name_div}>
                <div className={styles.rect}></div>
                <h1>Rick</h1>
                <h1>Moore</h1>
            </div>
            <div className={styles.portrait_div}>
                <Image 
                    className={styles.portrait} 
                    src={portrait} 
                    alt="Main portrait"
                    layout='intrinsic'
                    priority
                    objectPosition = 'right bottom' 
                    />
            </div>
        </section>
    )
}