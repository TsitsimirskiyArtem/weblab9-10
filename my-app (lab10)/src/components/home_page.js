import React from "react";
import imgLaptop from "../img/laptop2.jpg";

const HomePage = () => {
    return (
        <main className="home">
            <img className="home-img" src={imgLaptop}/>
            <div className="home-description">
                <h1 className="title">RozetkaLaptops</h1>
                <p className="description">Широкий вибір ноутбуків для роботи, навчання та розваг. 
                У нашому магазині ви знайдете моделі від провідних виробників за привабливими цінами. 
                Оберіть свій ідеальний ноутбук вже сьогодні!</p>
            </div>
        </main>
    )
}

export default HomePage;