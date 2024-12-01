import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from "./Button";
import { Select } from 'antd';
import useFetchLaptops from "../FetchLaptop";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/itemSlice";

function Item() {
    const { id } = useParams();
    const { laptops, loading, error} = useFetchLaptops();
    const [selectedType, setSelectedType] = useState("Тип процесору");
    const [selectedPower, setSelectedPower] = useState("Оперативна пам'ять");
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const laptop = laptops.find(item => String(item._id) === id);

    const handleChangeType = (value) => {
        setSelectedType(value);
    }
    const handleChangePower = (value) => {
        setSelectedPower(value);
    }

    const handleViewMoreClick = (id) => {
        navigate(`/laptops/${id}`);
    };

    if (loading) {
        return <div className="load">Завантаження...</div>;
    }
    if (error) {
        return <p>Помилка: {error}</p>;
    }

    const handleAdd = () => {
        if ( laptop ) {
            dispatch(addItem({ ...laptop, type: selectedType, power: selectedPower, quantity: count}));
        }
    }

    return(<div>
        <div className="item-decriptions">
            <img className="item-img" src={laptop.img}/>
            <div>
                <h2>{laptop.title}</h2>
                <p className="item-description">{laptop.description}</p>
                <div className="item-selects">
                    <div className="item-select">
                        <label className="label" htmlFor="select">Тип приводу</label>
                        <Select id="select" className="select" value={selectedType} onChange={handleChangeType} onCountChange={setCount}>
                            <Select.Option value="офісний">офісний</Select.Option>
                            <Select.Option value="ігровий">ігровий</Select.Option>
                            <Select.Option value="для творчості">для творчості</Select.Option>
                        </Select>
                    </div>
                    <div className="item-select">
                        <label className="label" htmlFor="select">Оперативна пам'ять</label>
                        <Select className="select" value={selectedPower} onChange={handleChangePower} onCountChange={setCount}>
                            <Select.Option value="8 ГБ">8 ГБ</Select.Option>
                            <Select.Option value="16 ГБ">16 ГБ</Select.Option>
                            <Select.Option value="32 ГБ">32 ГБ</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
        <div className="item-nav">
            <p className="item-price">Price: {`${laptop.price} грн`}</p>
            <div>
                <Link className="link" to="/catalog">
                    <Button className="back-btn"  text="Go back"/>
                </Link>
                <Link className="link" to="/cart">
                    <Button className="add-btn" text="Add to cart" onClick={handleAdd}/>
                </Link>
            </div>
        </div>
    </div>)
}

export default Item;