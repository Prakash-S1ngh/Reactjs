import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteFromCart } from '../redux/slices/Dataforshop';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

export default function Cartitems({ prod }) {
    const dispatch = useDispatch();

    const deletesomething = () => {
        dispatch(deleteFromCart(prod));
        toast.success(`${prod.title} removed from cart`);
    };

    return (
        <div className="cart-item">
            <div className="left-img">
                <img src={prod.image} alt={prod.title} />
            </div>
            <div className="right">
                <div className="card-text">{prod.title}</div>
                <div className="card-desc">
                    {prod.description.length > 50 ? `${prod.description.substring(0, 50)}...` : prod.description}
                </div>
                <div className="foot">
                    <div className="price">${prod.price}</div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTrashAlt} onClick={deletesomething} />
                    </div>
                </div>
            </div>
        </div>
    );
}
