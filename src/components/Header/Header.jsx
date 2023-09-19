import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <nav>
        <Link to="/">Home</Link>
        {/* <a href="/">Home</a> */}
        <Link to="/menu">Menu</Link>
        {/* <a href="/menu">Menu</a> */}
        <Link to="/contact">Contact</Link>
        {/* <a href="/contact">Contact</a> */}
        <Link to="/about">About us</Link>
        {/* <a href="/about">About us</a> */}
        <Link to="/users">Users</Link>
        <Link to='posts'>Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
