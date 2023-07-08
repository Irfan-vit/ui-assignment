import { Link } from 'react-router-dom'
import './footer.css'
import tww from '../../assets/img/tww.svg'
import fbw from '../../assets/img/fbw.svg'
import inw from '../../assets/img/inw.svg'
import piw from '../../assets/img/piw.svg'
import lnw from '../../assets/img/lnw.svg'
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer-links">
          <div className="footer-nav">
            <ul className="links">
              <li>
                <h4>LINKS</h4>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Customer Service</Link>
              </li>
              <li>
                <Link>FAQs</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>
            <ul className="info">
              <li>
                <h4>INFORMATION</h4>
              </li>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link>Refund policy</Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
            </ul>
          </div>
          <ul className="payments">
            <li>visa</li>
            <li>master</li>
            <li>applePay</li>
            <li>amex</li>
          </ul>
        </section>
        <section className="footer-social">
          <ul>
            <li>
              <img src={fbw} alt="" />
            </li>
            <li>
              <img src={tww} alt="" />
            </li>
            <li>
              <img src={inw} alt="" />
            </li>
            <li>
              <img src={piw} alt="" />
            </li>
            <li>
              <img src={lnw} alt="" />
            </li>
          </ul>
          <span>c 2021 Abokichi.</span>
        </section>
      </footer>
    </>
  )
}
export default Footer
