import Bella from '../../assets/images/Rectangle 48.jpg'

function Header(  ) {
  return (
    <div className="header" >
      <img className="headerImg" src={Bella} alt="Bella" width="80" />
      <ul className="nav-menu-list" >
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      </ul>
    </div>

  );
};



export default Header;