// Example: MyComponent.js
import './Apex.css';

function MyComponent() {
  return <div className="ESW-module-container">
            
               <div className="esw-text-container">
                <div><h3>Apex Red Dragon apparel</h3></div>
                <div><p>A sleek and minimalist design with hints of cultural references and Leader culture.</p></div>
               </div>


               <div className="esw-image-container">
                <img src={process.env.PUBLIC_URL + '/Easternserviceworkersassociation/batch_Layer 1_Color Diagram.png'} alt="ESW color diagram" className="esw-color-diagram" />
                <img src={process.env.PUBLIC_URL + '/Easternserviceworkersassociation/supermarketbanner.png'} alt="ESW Supermarket Banner" className="esw-supermarket-banner" />
        
               </div>








        </div>;
}
export default MyComponent;