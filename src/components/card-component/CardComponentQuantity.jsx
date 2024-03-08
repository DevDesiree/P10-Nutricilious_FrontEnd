import {useState} from 'react';
import naranja from '../../assets/images/naranja.jpg'

export default function CardComponentQuantity() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-40 w-full object-cover object-center" src={naranja} alt="naranja" />
            </a>
            <div className="px-5 p-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Naranja</h3>
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray">0.30 €/ud</span>
                </div>
                <div className="flex justify-between items-center">
                   
                <div className="flex items-center justify-between">
                    <a
                        type="button"
                        href="#"
                        className="focus:outline-none text-gray bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                        Saber más
                    </a>
                </div>
                <div className="flex items-center border-gray-100">
                        <span
                            className="cursor-pointer rounded-full bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-gray flex justify-center items-center shadow-md"
                            onClick={decreaseQuantity}
                        >
                            -
                        </span>
                        <input
                            className="h-8 w-8 bg-white text-center text-base outline-none"
                            value={quantity}
                            readOnly
                        />
                        <span
                            className="cursor-pointer rounded-full bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-gray flex justify-center items-center shadow-md"
                            onClick={increaseQuantity}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
