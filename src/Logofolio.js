import './Logofolio.css';


function Logofolio() {
  return <div className="folio-module-container">
            <div className="folio-text-container"> 
                <h3 className="folio-title">Logofolio</h3> 
                <p className="folio-description">A collection of
                     logos and branding work that I have created
                      for various clients and projects. Each logo 
                      is designed to be unique and memorable, 
                      while also effectively representing the 
                      brand it represents.</p>  
            </div>
         
            <div className="folio-image-container">
                <img src={process.env.PUBLIC_URL + '/Logofolio/2.png'} alt="Logofolio Image 2" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/3.png'} alt="Logofolio Image 3" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/4.png'} alt="Logofolio Image 4" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/5.png'} alt="Logofolio Image 5" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/6.png'} alt="Logofolio Image 6" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/7.png'} alt="Logofolio Image 7" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/8.png'} alt="Logofolio Image 8" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/9.png'} alt="Logofolio Image 9" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/10.png'} alt="Logofolio Image 10" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/11.png'} alt="Logofolio Image 11" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/12.png'} alt="Logofolio Image 12" className="folio-image" />
                <img src={process.env.PUBLIC_URL + '/Logofolio/13.png'} alt="Logofolio Image 13" className="folio-image" />
            </div>
         
         
         
         
         
         </div>;
}

export default Logofolio;