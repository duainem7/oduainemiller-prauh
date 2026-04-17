// Example: MyComponent.js
import './Apex.css';

function MyComponent() {
  return <div className="Apex-module-container">
            
               <div className="Apex-text-container">
                <div><h3 className="apex-text-title">Apex Red Dragon apparel</h3></div>
                <div><p className="apex-text-description">A sleek and minimalist design with hints of cultural references and Leader culture.</p></div>
               </div>


               <div className="Apex-image-container">
                <img src={process.env.PUBLIC_URL + '/Apex/hoodie.png'} alt="Apex Red Dragon Hoodie" className="apex-hoodie" />
                <img src={process.env.PUBLIC_URL + '/Apex/Card.png'} alt="Apex Red Dragon Card" className="apex-card" />
                <img src={process.env.PUBLIC_URL + '/Apex/poloshirt.jpg'} alt="Apex Red Dragon Polo Shirt" className="apex-poloshirt" />
                <img src={process.env.PUBLIC_URL + '/Apex/newsock.jpg'} alt="Apex Red Dragon New Sock" className="apex-newsock" />
               </div>








        </div>;
}
export default MyComponent;
