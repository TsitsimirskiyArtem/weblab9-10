import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import useFetchLaptops from "../FetchLaptop";

const Laptops = ({data, limit }) => {
    const { laptops, loading, error } = useFetchLaptops(); 
    const navigate = useNavigate();
    const location = useLocation();

    const laptopData = data || laptops

    const handleViewMoreClick = (id) => {
        navigate(`/laptops/${id}`);
    };

    const displayedData = limit ? laptopData.slice(0, limit) : laptopData;


    if (error) {
        return <p>Помилка: {error}</p>;
    }

    return (
        <ul className="items-container">
            {displayedData.length > 0 ? (
                displayedData.map((laptop) => (
                    <li className="laptop-container" key={laptop.id}>
                        <img className="laptop-img" src={laptop.img} alt={laptop.title} />
                        <h1 className="title-laptop">{laptop.title}</h1>
                        <p className="description-laptop">{laptop.description}</p>
                        {location.pathname === '/catalog' && (
                            <>
                                <div className="price">
                                    <p className="txt-price">Price: </p>
                                    <p className="price-laptop">{`${laptop.price} грн`}</p>
                                </div>
                                <Button className="view-more-btn" text="View more" onClick={() => handleViewMoreClick(laptop._id)}/>
                            </>
                        )}
                    </li>
                ))
            ) : (
                <p className="txt-no-found"></p>
            )}
        </ul>
    );
};

export default Laptops;