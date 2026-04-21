import './Krauh.css';

function Krauh() {
    return <div className="krauh-module-container">
          
                <div className="krauh-text-container">
                    <div><h3 className="krauh-title">Krauh</h3></div>
                    <div><p className="krauh-description">A sleek and minimalist design with hints of cultural references and Leader culture.</p></div>
                </div>


                <div className='krauh-hero-container'>
                    <img src={process.env.PUBLIC_URL + '/Krauh/hero.png'} alt="Krauh Hero Image" className="krauh-hero-image" />
                </div>

                <div className="krauh-image-container">
                    <img src={process.env.PUBLIC_URL + '/Krauh/1.png'} alt="Krauh Image 1" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/2.png'} alt="Krauh Image 2" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/3.png'} alt="Krauh Image 3" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/4.png'} alt="Krauh Image 4" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/5.png'} alt="Krauh Image 5" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/6.png'} alt="Krauh Image 6" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/7.png'} alt="Krauh Image 7" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/8.png'} alt="Krauh Image 8" className="krauh-image" />
                    <img src={process.env.PUBLIC_URL + '/Krauh/9.png'} alt="Krauh Image 9" className="krauh-image" />
                </div>
          
          
          
          
          
           </div>

}

export default Krauh;