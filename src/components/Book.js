import './Book.css'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCEzlsGEpMtQKLlhVSQRoTUMsioqkdU2Rk",
    authDomain: "airbnb-5c4d5.firebaseapp.com",
    projectId: "airbnb-5c4d5",
    storageBucket: "airbnb-5c4d5.appspot.com",
    messagingSenderId: "17716395224",
    appId: "1:17716395224:web:8eb6c1ff0b555594662bad",
    measurementId: "G-CYXNRZX64M"
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const Book = () => {
    let Hotels = [
        {
            name: "Four Sesons Hotel Doha",
            Place:"Qatar",
            price: "1000",
            image: "https://media.cntraveler.com/photos/5f678a4a978ff785b250160d/master/w_320%2Cc_limit/raffles-istanbul.jpg",
        },

        {
            name: "The Leela Palace New Delhi",
            Place:"India",
            price: "2000",
            image: "https://media.cntraveler.com/photos/53dadfbadcd5888e145d380f/master/w_320%2Cc_limit/aranwa-sacred-valley-urubamba-sacred-valley--peru-111468-1.jpg",
        },
        {
            name: "ITC Grand Chola",
            Place:"Chennai",
            price: "3000",
            image: "https://www.greavesindia.co.uk/wp-content/uploads/2016/11/itcchola.jpg",
        },
        {
            name: "Soukya",
            palace:"Bangalore",
            price: "4000",
            image: "https://www.greavesindia.co.uk/wp-content/uploads/2016/11/soukayaresized.jpg",
        },
    ]
    // console.log(Hotels[0].price);
    const bookHotel1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = '$' + Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[0].image,
            HotelName: Hotels[0].name,
            HotelPrice: '$' + Hotels[0].price,
            });
        }

    }
    const bookHotel2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = '$' + Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[1].image,
            HotelName: Hotels[1].name,
            HotelPrice: '$' + Hotels[1].price,
            });
        }
    }
    const bookHotel3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML = '$' + Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[2].image,
            HotelName: Hotels[2].name,
            HotelPrice: '$' + Hotels[2].price,
            });
        }
    }
    const bookHotel4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[3].image;
        nameTarget.innerHTML = Hotels[3].name;
        priceTarget.innerHTML = '$' + Hotels[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[3].image,
            HotelName: Hotels[3].name,
            HotelPrice: '$' + Hotels[3].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find best hotel</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHotel1}>
                            <img src={Hotels[0].image} alt="hotel1" />
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{'$' + Hotels[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{'$' + Hotels[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{'$' + Hotels[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel4}>
                            <img src={Hotels[3].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[3].name}</div>
                            <div className="price">{'$' + Hotels[3].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;