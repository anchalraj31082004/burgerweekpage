import "../styles/Footer.css"
import { IoLocation } from 'react-icons/io5'
import { GoMail } from 'react-icons/go'
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai"
import {FiFacebook, FiTwitter} from "react-icons/fi"


const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="image">
        <img src="/images/footerlogo.png" alt="" />
      </div>
      <div className="middle-section">
        <div className="para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non iusto, porro quis placeat nisi debitis repellendus, excepturi beatae corporis sequi doloremque itaque ullam voluptate autem tempore qui nihil nesciunt.</p>
        </div>
        <div className="location">
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
      <div className="last-section">
        <div>
          <p>All rights reserved Anchal raj</p>
        </div>
        <div className="icons">
          <AiOutlineInstagram />
          <FiFacebook/>
          <FiTwitter/>
          <AiOutlineWhatsApp/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer