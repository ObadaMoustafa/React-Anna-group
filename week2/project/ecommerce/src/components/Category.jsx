// import { NavLink, Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

function Category({ name, onClick, className }) {
  return (
    <Link>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </Link>
  );
}
export default Category;
