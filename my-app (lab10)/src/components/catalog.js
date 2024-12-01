import React, { useState, useEffect } from "react";
import Laptops from "./laptops"; 
import Button from "./Button";
import useFetchLaptops from "../FetchLaptop";

const Catalog = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const { laptops, loading, error } = useFetchLaptops();

    const viewMore = () => {
        setVisibleCount(visibleCount + 4);
    }

    const hideCards = () => {
        setVisibleCount(4);
    };

    if (loading) {
        return <p className="load">Завантаження...</p>;
    }

    if (error) {
        return <p>Помилка: {error}</p>;
    }

    return (
        <div>
            <Laptops data={laptops.slice(0, visibleCount)} /> 
            {visibleCount < laptops.length && (
                <Button text="View more" className="view-btn" onClick={viewMore}/>
            )}
            {visibleCount >= laptops.length && (
                <Button text="Hide cards" className="view-btn" onClick={hideCards} />
            )}
        </div>
    );
};

export default Catalog;