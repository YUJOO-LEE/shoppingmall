import { Link } from "react-router-dom";

function Gnb() {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Gnb;