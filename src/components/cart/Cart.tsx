import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import CartItemsList from './CartItemList';

const Cart: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    let navigate = useNavigate();

    return (
        <div className='container mx-auto max-w-7xl pt-5 pb-10 min-h-screen px-10 mt-14 md:mt-0'>
            <h1 className='text-3xl md:text-4xl md:text-left md:ml-6 mb-5 '>
                Корзина
            </h1>
            {cartItems.length ? (
                CartItemsList()
            ) : (
                <p className='my-14 text-2xl px-10'>Ваша корзина пуста</p>
            )}
            <button
                onClick={() => navigate(-1)}
                className='h-10 w-44 rounded-sm text-white bg-main-dark hover:bg-yellow-500 mb-4 mt-6'
            >
                Вернуться назад
            </button>
        </div>
    );
};

export default Cart;