
import { useEffect, useState } from "react";





const Apicalling = () => {
    const [products, setProduct] = useState([]);

   
const [quantities, setQuantities] = useState({});


    
   

    useEffect(() => {
        const apiData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const productData = await response.json();
                setProduct(productData.products);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        apiData();
    }, []);


    function incrementQuantity(id) {
      const  increment= ((prev) => {
            const newQuantity = (prev[id] || 0) + 1;
            return { ...prev, [id]: newQuantity };
        });
        setQuantities(increment)
    };

    const decrementQuantity = (id) => {
        setQuantities((prev) => {
            const newQuantity = Math.max((prev[id] || 0) - 1, 0);
            return { ...prev, [id]: newQuantity };
        });
    };

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => {
            const quantity = quantities[product.id] || 0;
            return total + product.price * quantity;
        }, 0);
    };


    return (
        <div className="max-w-screen-2xl h-screen-full bg-slate-400 flex flex-col justify-center items-center m-auto text-balance">



            <h1 className="font-bold text-2xl md:text-[30px] font-serif m-5 ">Product Data</h1>
              
            {products.length > 0 && (
                <div className="flex flex-wrap gap-3 justify-center items-center">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center justify-center p-3 shadow-xl text-balance  bg-white">
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="font-bold">{product.id}</div>
                            <div className="font-bold">{product.title}</div>
                            <div className="font-bold">$ {product.price}</div>
                            <div className="flex items-center">
                                <button onClick={() => decrementQuantity(product.id)} className="px-2">-</button>
                                <span className="mx-2">{quantities[product.id] || 0}</span>
                                <button onClick={() => {incrementQuantity(product.id)}} className="px-2">+</button>
                            </div> 
                            <div className="mt-2 font-bold">
                                  {product.title}: $ {(quantities[product.id] || 0) * product.price}
                            </div>

                        </div>
                    ))}
                </div>
            )}
            <div>Total Price : {calculateTotalPrice()}</div>
           
        </div>
    );
};

export default Apicalling;
