import "../styles/Footer.css"
import { IoLocation } from 'react-icons/io5'
import { GoMail } from 'react-icons/go'

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="upper-section">
          <div className="img-div">
              <img src="/images/footerlogo.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non iusto, porro quis placeat nisi debitis repellendus, excepturi beatae corporis sequi doloremque itaque ullam voluptate autem tempore qui nihil nesciunt.</p>
          </div>
          <div className="footer-content">
                <div className="address">
                    <IoLocation/>
                    <h6>Ring Road kamre Ratu Ranchi</h6>
                </div>
                <div className="address">
                    <GoMail/>
                    <h6>Info@StreetCafe.com</h6>
                </div>
          </div>
      </div>
    </div>
    </>
  )
}