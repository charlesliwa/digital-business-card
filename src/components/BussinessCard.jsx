import React from 'react'
import me from '../images/liwa.jpg'

const BusinessCard = () => {
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                    <img className='main-img' src={me} alt="Portrait of Charles Liwa" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Charles Liwa</h2>
                    <h4 className='role'>Full-Stack Developer</h4>
                    <h5 className='web'>
                        <a href="https://minhvyha.tech" target="_blank" rel="noopener noreferrer">minhvyha.tech</a>
                    </h5>
                    <div className='connect'>
                        <a className='mail' href="mailto:charles.liwa@outlook.com">📧 Email</a>
                        <a
                            className='linkedin'
                            href="https://www.linkedin.com/in/charles-liwa-42b2b7379"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            🔗 LinkedIn
                        </a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. </p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Finance. Music. Technology. Sport. Health. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href="https://www.facebook.com/minhvy.ha.75/" target='_blank' rel='noopener noreferrer' aria-label='Facebook'>📘</a>
                    <a href="https://leetcode.com/minhvy828/" target='_blank' rel='noopener noreferrer' aria-label='LeetCode'>🧩</a>
                    <a href="https://www.youtube.com/channel/UC6kYs1bW0j273GneHxFyPFQ" target='_blank' rel='noopener noreferrer' aria-label='YouTube'>▶️</a>
                    <a href="https://github.com/minhvy828" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>🐙</a>
                </div>
            </div>
        </>
    )
}
export default BusinessCard
