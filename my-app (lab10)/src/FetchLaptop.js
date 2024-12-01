import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLaptops = () => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const response = await axios.get("http://localhost:3000/laptops");
                setLaptops(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };
        fetchLaptops();
    }, []);

    return { laptops, loading, error };
};

export default useFetchLaptops;
