import React from 'react'
import communication from '../asset/communication.png'
import '../css/about.css'

function About() {
  return (
    <section className='castus'>
        <div className='heading'>
            <h1>About Us</h1>
        </div>
        <div className='container'>
            <div className='castus-content'>
                <h2>Welcome To Our Website</h2>
                <p>nous sommes bien plus qu'une simple agence de communication. 
                    Nous sommes les créateurs d'histoires, les connecteurs d'idées et les catalyseurs de changement. 
                    Notre passion pour la communication sous toutes ses formes nous pousse à repousser les limites de l'innovation et à façonner des expériences engageantes qui laissent une empreinte durable. 
                    À travers une approche stratégique et créative, nous transformons vos messages en récits captivants, reliant votre marque au cœur de votre public. 
                    Découvrez comment nous pouvons transformer votre vision en réalité."</p>
                    <button className='castus-button'>Learn More</button>
            </div>
            <div className="castus-image">
                <img className='cst-image' alt='castus' src={communication} />
            </div>
        </div>
    </section>
  )
}
export default About