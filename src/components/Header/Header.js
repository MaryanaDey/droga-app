import Bella from '../../assets/images/Rectangle 48.jpg'

function Header(  ) {
  return (
    <div className="header" >
      <img src={Bella} alt="Bella" width="80" />
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
          
            
    </div>

  );
};



export default Header;