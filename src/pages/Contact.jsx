import React from 'react';
import '../css/contact.css'

function Contact() {
  
  return (
    <div className="body">
      <div className="container-one">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Adresse</div>
              <div className="text-one">Bê-klikame, Lomé-Togo</div>
              <div className="text-two"></div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Numéro de Téléphone</div>
              <div className="text-one">+00228 96 64 67 64</div>
              {/* <div className="text-one">+228 90 08 43 87</div> */}
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">castustgcommunication@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Envoyez vos messages</div>
            <p>Veuillez envoyer vos messages, ils seront les bienvenus...</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Entrer votre nom" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Entrer votre email" />
              </div>
              <div className="input-box">
                <input type="number" placeholder="Entrer votre numéro de téléphone" />
              </div>
              <div className="input-box message-box">
                <textarea></textarea>
              </div>
             {/*  <div className="button">
                <input type="button" value="Envoyez votre message" />
              </div> */}
              <button className='button'>Envoyez-nous votre message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
