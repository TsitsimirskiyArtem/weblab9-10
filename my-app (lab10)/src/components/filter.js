import React, { useState } from "react";
import { Select } from 'antd';
import Button from "./Button";

const Filter = ({ onSort, onApply }) => {
    const [selectedValue, setSelectedValue] = useState("Filter 1");
    
    const handleChange = (value) => {
        setSelectedValue(value);
    }

    const handleApply = () => {
        if (selectedValue) {
            onSort(selectedValue);
            onApply();
        }
    }
    
    return (
        <>
            <div className="filter">
                <div className="selects">
                    <Select className="select" value={selectedValue} onChange={handleChange}>
                        <Select.Option value="Name">Name</Select.Option>
                        <Select.Option value="Price">Price</Select.Option>
                        <Select.Option value="Power">Power</Select.Option>
                    </Select>
                </div>
                <div>
                    <Button className="apply-btn" text='Apply' onClick={handleApply} />
                </div>
            </div>
        </>
    )
}

export default Filter;