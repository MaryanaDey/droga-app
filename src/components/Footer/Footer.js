import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/about" className="footer__link">About</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
        </div>
        <div className="footer__social">
          <a href="#" className="footer__icon-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="footer__icon-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer__icon-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2023 My Candy Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
























































// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';



// function Footer(  ) {
//     return (
      
//             <div className="footer" >
//             <div className="contanier">
//                 <div className='footer-contanier'>

//                     <div className="footer-logo">
//                     <a className="logo" href="#"><span className="logo__web">Web</span><span className="logo__studio--footer">Studio</span></a>
//                     <address className="adress">
//             <p className="footer-adress">г.Киев, пр-т Леси Украинки, 26</p>

//             <ul class="address-list">
//               <li className="contact-footer"><a className="phone-link" href="mailto:info@example.com">info@example.com</a></li>
//               <li className="contact-footer"><a className="phone-link" href="tel:+380991111111">+38 099 111 11 11</a></li>
//             </ul>
//           </address>
//                 </div>

//                 <div className="join">
//                     <h2 className="join__title">присоединяйтесь</h2>

//                     <ul className="social-icon social-icon__footer">
//                         <li className="social-icon__item"><a href="#"> <span><FontAwesomeIcon icon={faFacebook} className="icon my-facebook-icon" /></span></a></li>
//                         <li className="social-icon__item"><a href="#"> <span><FontAwesomeIcon icon={faFacebook} className="icon my-facebook-icon" /></span></a></li>
//                         <li className="social-icon__item"><a href="#"> <span><FontAwesomeIcon icon={faFacebook} className="icon my-facebook-icon" /></span></a></li>
//                         <li className="social-icon__item"><a href="#"> <span><FontAwesomeIcon icon={faFacebook} className="icon my-facebook-icon" /></span></a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-form">
//                     <b className="footer-form__title">Подпишитесь на рассылку</b>
//                     <form className="footer-form__subscribe">
//                 <input type="email" name="user-email" placeholder="E-mail" className="footer-input" />
//                 <button type="submit" className="button button__footer">Подписаться</button>
//               </form>
//                 </div>
//             </div>
//           </div>
//        </div>
     

//     )
// }



// export default Footer;



 {/* <p>Пироги : Пирог с курицей и грибами , Пирог 3 сыра и шпинат , Пирог с телятиной BBQ и болгарским перцем , Пирог с черникой и сыром Риккота , Пирог с лососем и сыром</p>
            <img src={Bella} alt="Bella" width="80" />
            <p>Правила Frozen Dozen © 2023</p> */}