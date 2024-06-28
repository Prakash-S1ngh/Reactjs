import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import products from '../Data'; // Ensure products import is correct
import { addInCart } from '../redux/slices/Dataforshop';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

export default function Home() {
    const dispatch = useDispatch();

    // Assuming products are fetched from Redux state
    // const products = useSelector(state => state.products); // Uncomment if using Redux state for products

    const handleAddToCart = (product) => {
        dispatch(addInCart(product));
        toast.success(`${product.title} added to cart`);
    };

    return (
        <div className="Home-App">
            {products.map((prod) => (
                <div className="prod-card" key={prod.id}>
                    <div className="prod-head">{prod.title}</div>
                    <div className="description">
                        {/* Truncate description if it's longer than 50 characters */}
                        {prod.description.length > 50 ? `${prod.description.substring(0, 50)}...` : prod.description}
                    </div>
                    <div className="img"><img src={prod.image} alt={prod.title} /></div>
                    <div className="footer">
                        <div className="price">${prod.price}</div>
                        <button onClick={() => handleAddToCart(prod)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
