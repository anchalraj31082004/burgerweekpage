import "../styles/FooterCopyright.css"
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai"
import {FiFacebook, FiTwitter} from "react-icons/fi"

const FooterCopyright = () => {
  return (
    <div>
      <div>
        <p>Copyright Anchal. All right reserved</p>
      </div>
      <div>
        <AiOutlineInstagram />
        <FiFacebook/>
        <FiTwitter/>
        <AiOutlineWhatsApp/>
      </div>
    </div>
  )
}

export default FooterCopyright
