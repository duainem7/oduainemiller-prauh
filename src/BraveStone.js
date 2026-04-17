// Example: MyComponent.js

import './BraveStone.css';
function BraveStone() {
  return <div className="BraveStone-module-container">
            <div className="brave-stone-image-container">
                <img src={process.env.PUBLIC_URL + '/BraveStone/bravestoneoriginalsketchandbrainstormyaasss.jpg'} alt="Brave Stone" className="brave-stone-image" />
                <img src={process.env.PUBLIC_URL + '/BraveStone/bravestonelogoinitial.jpg'} alt="Brave Stone Logo" className="brave-stone-logo" />

            </div>


            <div className="brave-stone-text-container">
                <div className="bravestone-title-text-container"><h3 className="bravestone-title-text">Brave Stone</h3></div>
                <div className="brave-stone-description-container"><p className="bravestone-description-text">Welcome to Brave Stone!</p></div>
            </div>
  
  
  
  
  
  
  
  
  
  
 </div>
}


export default BraveStone;
