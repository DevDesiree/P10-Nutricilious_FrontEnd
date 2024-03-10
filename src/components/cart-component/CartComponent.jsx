import PropTypes from 'prop-types';

const CartComponent = ({ cartItems }) => {
    return (
        <div className="p-5 fixed top-0 right-0 bg-gray-100 shadow-md">
            <h2 className="text-xl font-semibold mb-3">Carrinho</h2>
            <div className="flex flex-col">
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                        <div>
                            <span className="font-semibold">{item.productName}</span>
                            <span className="text-gray-500 ml-2">{item.productPrice}</span>
                        </div>
                        <span className="text-gray-500">{item.quantity}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

CartComponent.propTypes = {
    cartItems: PropTypes.array.isRequired,
};

export default CartComponent;
