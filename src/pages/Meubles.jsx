import React from 'react'
import '../css/vetements.css'
import {MeubleData} from '../data';
import { useCart } from 'react-use-cart';

function Meubles() {
  const { addItem } = useCart()
  return (
    <div>
    <section className='container'>
        {
            MeubleData.map((item) => {
                return(
                    <div key={item} className='row'>
                        <div className='col-md-6 col_image'><img className='images' src={item.imageurl} alt="" /></div>
                        <div className='col-md-5'>
                        <div className='detail'>
            <h2>Nom de l'article</h2>
            <div className='prix'>
              <span><strong>Prix:</strong></span>
              <span>20000 Fcfa</span>
            </div>
            <div>
              <select className='select' name="" id="">
                <option value="">Séléctionné votre taille</option>
                <option value="">44</option>
                <option value="">43</option>
                <option value="">42</option>
                <option value="">41</option>
                <option value="">40</option>
                <option value="">39</option>
                <option value="">38</option>
              </select>
            </div>
            <div>
              <h4><strong>Détail du produit</strong></h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Consequatur quidem, quaerat atque quasi vero suscipit at vel
               </p>
            </div>
            <div className='button_modal'>
              <button onClick={ ()=>addItem(item)}  className='add_btn'>Ajouter au panier</button>
            </div>
           </div>
                        </div>
                    </div>
                )
            })
        }
    </section>
</div>
  )
}

export default Meubles