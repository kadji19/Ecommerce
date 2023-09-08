import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import dressing from '../asset/dressing.png'
import Carousel from 'react-multi-carousel';
import { productData, MeubleData,costumeData, responsive } from '../data';
import Product from './Product';
import 'react-multi-carousel/lib/styles.css'

function Home() {

              const product = productData.map((item) => (
                <Product
                  key={item.id} 
                  name={item.name}
                  url={item.imageurl}
                  price={item.price}
                  description={item.description}
                  item ={item}
                  id = {item.id}
                />
              ));
              const meuble = MeubleData.map((item) => (
                <Product
                  key={item.id} 
                  name={item.name}
                  url={item.imageurl}
                  price={item.price}
                  description={item.description}
                  item ={item}
                  id = {item.id}
                />
              ));
              const chemise = costumeData.map((item) => (
                <Product
                  key={item.id} 
                  name={item.name}
                  url={item.imageurl}
                  price={item.price}
                  description={item.description}
                  item ={item}
                  id = {item.id}
                />
              ));

  return (
    <div>
      <section>
        <div className='banner'>
          <img  className='banner-image' src={dressing} alt="" />
          <div className='text'>
            <span className='span-text'>Lorem,  <br /> ipsum dolor <br />bsum placeat </span>
          </div>
        </div>
      </section>

              <section className='section-image'>
            <Carousel showDots={true} responsive={responsive}>
                         {product}
            </Carousel>
              </section>
              <section className='section-image'>
              <Carousel showDots={true} responsive={responsive}>
                         {meuble}
            </Carousel>
              <Carousel showDots={true} responsive={responsive}>
                         {chemise}
            </Carousel>
              </section>
    </div>
  )
}

export default Home;
