import './Footer.modules.css';
import twitter from '../../assets/twitter.svg'
import facebbok from '../../assets/facebook.svg'

function Footer() {
  return (
    
    <div>

    <footer className="footer">


      <p>About us</p>  
      
      <p>Contact</p>
      <div className="twitter">
      <img src={twitter} alt="Logo twiter"/>
       <p>Twitter</p>
       </div>
       <div className="facebook">
         <img src={facebbok} alt="Logo facebook"/>
         <p>Facebook</p>
       </div>
     
    </footer>
    </div>

  );
}       

export default Footer;   
