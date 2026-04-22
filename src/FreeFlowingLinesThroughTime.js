// Example: MyComponent.js
import './FreeFlowingLinesThroughTime.css';

function FFLTT() {
  return <div className="ffltt-module-container">
            
               


               <div className="ffltt-image-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Freeflowinglinesthroughtime/prepped_20250824_130906.jpg'})` }}>

                 <div className="ffltt-title-container">
                  <div><h5>Free Flowing Lines Through Time</h5></div>
                  <div className="fflt-description-container"><p className="ffltt-description">A collective display of  organic line works 
                    thoughtfully put together for appreciation <br /><br />
                    "Free Flowing Lines Through Time" invites viewers to follow the journey 
                    of ink/pencil across  paper, where each stroke carries a sense of movement and memory. 
                    These organic lines twist, merge, and drift, capturing moments that feel both fleeting 
                    and eternal.</p></div>
                </div>

                <div className="ffltt-inner-image-container"><img src={process.env.PUBLIC_URL + '/Freeflowinglinesthroughtime/eddieheartenburd.jpg'} alt="Free Flowing Lines Through Time" /></div>

               </div>








        </div>;
}
export default FFLTT;