import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Navigation = ({ onSearch }) => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <nav className="navigation">
            <h1 className="nav-title">RozetkaLaptops</h1>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/catalog">Catalog</Link>
                </li>
                <li>
                <Link className="link" to="/cart">Cart</Link>
                </li>
            </ul>
            {location.pathname === '/catalog' && (
            <div className="search-container">
                <input className="nav-input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <GoSearch className="icons-search" onClick={handleSearchClick}/>
            </div>
)}
        </nav>
    )
}

export default Navigation;