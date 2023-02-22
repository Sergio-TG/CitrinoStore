import React from 'react'

const Footer = () => {
    return (
  
        <div className="df-footer shadow-lg">
            <div className="footer-left">
                <a href='https://goo.gl/maps/LvpqpesQEnw4Bu8W7' target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                    </svg>
                </a>
                <i class="bi bi-pin-map-fill"></i><p className="location text-muted">Rosario (2000), Santa Fe, Argentina</p>
            </div>
        </div>
    )
}

export default Footer