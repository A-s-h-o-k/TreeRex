import { Link } from "react-router-dom";
import { CartIcon } from "../Icons";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2>TeeRex Store</h2>
      <div className="left-buttond-container">
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
