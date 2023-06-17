import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-ligth pt-5 pb-4 pb-lg-5 mt-2 mt-md-0 sticky" id="pie">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="../gem.svg" width="47" alt="Citrino Store" />
              Citrino Store
            </div>
            <p id="text-info" className="fs-sm pb-lg-3 mb-4">Los cristales han jugado un papel clave en el aspecto espiritual de las sociedades a lo largo de la historia debido a sus propiedades únicas y su calidad estética. Y no es de extrañar: son fuente de frecuencias vibratorias que alteran la energía de su entorno.Los colores del arcoiris son una herramienta sencilla para categorizarlos. Cada color corresponde a uno de los siete chakras e influye en la energía gobernada por ese chakra. Por ejemplo: un cristal verde, como la fluorita, afecta el chakra del corazón, que trata con el amor, la empatía y las relaciones.</p>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0" id="footer-main">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Links</a>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item"><a href="/" className="nav-link d-inline-block px-0 pt-1 pb-2">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link d-inline-block px-0 pt-1 pb-2">Productos</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0" id="text-footer">                
                <h6>
                 <a href='https://api.whatsapp.com/send?phone=3417203575'className="mb-2">Consultas 341 7203575</a>
                 </h6>
                 <a href="mailto:citrinostore@gmail.com" className="fw-medium">citrinostore@gmail.com</a>
                 <p>
                 <a className="map" href="https://www.google.com/maps/place/Buenos+Aires+%26+Avenida+Pellegrini,+S2000+Rosario,+Santa+Fe/@-32.9582993,-60.635426,17z/data=!3m1!4b1!4m6!3m5!1s0x95b7ab06a47a3feb:0xcaddb488e8772f7a!8m2!3d-32.9582993!4d-60.635426!16s%2Fg%2F11h9rnlgky?entry=ttu">Rosario (2000) Santa Fe</a>
                 </p>
                </div>
              </div>
            </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          © All rights reserved. 2023. Made by SergioTG 
        </p>
      </div>
    </footer>
  );
};

export default Footer;