import { useParams, Link } from 'react-router-dom'

export const CartGreeting = () => {
  const { id } = useParams()

  return (
    <>
      <div className="CartBody">
        <div className="cartGreeting">
          <div className="greetingContainer">
            <div >
              <img className="cartGreeting_img" src='../images/greeting_b.png' alt='Hombre libro' />
            </div>
            <div className="cartGreeting_info">
              <div className="cartGreeting_msg">
                <h1>Muchas Gracias por tu Compra!</h1>
                <button type="text" className='bntGreeting'>Tu Número de Orden es: <b>{id}</b></button>
              </div>
              <div className='cartGreetin_link'>
                Salir...<Link to={"/"}><i className="bi bi-door-open-fill btn_salida" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}