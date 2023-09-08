import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <section className='footer-content'>
            <nav className='nav-footer'>
              <ul>
                <Link to="/contact" className='link-footer'>Contactez-nous</Link>
                <Link to="/copyright" className='link-footer'>Copyright</Link>
                <Link to="/about" className='link-footer'>Qui sommes-nous?</Link>
              </ul>
            </nav>
      </section>
    </footer>
  )
}

export default Footer