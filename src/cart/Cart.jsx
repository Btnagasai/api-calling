import useStore from "../Store";

const Cart = () => {
    const { cart, removeItem } = useStore();

    const cartItems = Object.entries(cart); 

    return (
        <div className="max-w-screen-lg mx-auto p-4 bg-white rounded shadow-md text-black">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(([productId, { title, quantity }]) => (
                        <li
                            key={productId}
                            className="flex justify-between items-center border-b py-2"
                        >
                            <div>
                                <span className="font-bold">{title}</span>
                                <span className="text-red-500 ml-2 font-bold">: {productId}</span>
                            </div>

                            <div className="flex items-center">
                                {/* Decrement Button */}
                                {/* <button
                                    onClick={() => decrementQuantity(productId)}
                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                >
                                    -
                                </button> */}

                                {/* Quantity */}
                                <span className="mx-2">{quantity}</span>

                                {/* Increment Button */}
                                {/* <button
                                    onClick={() => incrementQuantity(productId, title)}
                                    className="px-3 py-1 bg-green-500 text-white rounded"
                                >
                                    +
                                </button> */}

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeItem(productId)}
                                    className="ml-4 px-3 py-1 bg-gray-500 text-white rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
