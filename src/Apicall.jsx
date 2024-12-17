import { useEffect, useState } from "react";
import useStore from "./Store";

const Apicall = () => {
    const [products, setProducts] = useState([]);
    const { incrementQuantity, decrementQuantity, cart } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="max-w-screen-2xl h-screen-full bg-slate-400 flex flex-col justify-center items-center m-auto text-balance">
            <h1 className="font-bold text-2xl md:text-[30px] font-serif m-5 ">Product Data</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img src={product.thumbnail} alt={product.title} />
                        <div className="font-bold">{product.id}</div>
                        <h2 className="font-bold mt-2 text-center">{product.title}</h2>
                        <p>${product.price}</p>

                        <div className="flex items-center mt-3">
                            {/* Decrement Button */}
                            <button
                                onClick={() => decrementQuantity(product.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                -
                            </button>

                            {/* Quantity Display */}
                            <span className="mx-2">{cart[product.id]?.quantity || 0}</span>

                            {/* Increment Button */}
                            <button
                                onClick={() => incrementQuantity(product.id, product.title)}
                                className="px-3 py-1 bg-green-500 text-white rounded"
                            >
                                +
                            </button>
                        </div>

                        {/* Display total price for each product */}
                        <div className="mt-2 font-bold">
                            {cart[product.id]?.quantity > 0 && (
                                
                                <span>
                                     <span>{product.title}</span>
                                    Total: ${cart  [product.id]?.quantity * product.price}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apicall;
