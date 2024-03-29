import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponentQuantity = ({ productName, productPrice, imageUrl, productId }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleButtonClick = () => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-40 w-full object-cover object-center" src={imageUrl} alt={productName} />
            </a>
            <div className="px-5 py-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white mr-3 truncate">{productName}</h3>
                    <span className="text-xl font-bold text-gray-900 dark:text-gray">{productPrice} €/ud</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleButtonClick}
                            type="button"
                            className="focus:outline-none text-gray bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                            Saber más
                        </button>
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

CardComponentQuantity.propTypes = {
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired, 
};

export default CardComponentQuantity;