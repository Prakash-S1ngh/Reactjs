import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitems from './Cartitems';

export default function Cart() {
    const user = useSelector(state => state.prodname);

    // Calculate total amount
    const totalAmount = user.reduce((acc, prod) => acc + prod.price, 0);

    return (
        <div className="App-cart">
            <div className="App-cart">
                {!user || user.length === 0 ? (
                    <div className="empty">
                        <p>Your cart is empty</p>
                        <NavLink to="/">
                            <button>Shop now</button>
                        </NavLink>
                    </div>
                ) : (
                    <>
                        <div className="left">
                            {user.map(prod => (
                                <Cartitems key={prod.id} prod={prod} />
                            ))}
                        </div>
                        <div className='right'>
                            <h2 className='summaryhead'>Your cart</h2>
                            <div className='head-of-summary'>Summary</div>
                            <div className='count'>Total items: {user.length}</div>
                            <div className='amount'>Total amount: ${totalAmount.toFixed(2)}</div>
                            <button className='checkout'>Checkout Now</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
