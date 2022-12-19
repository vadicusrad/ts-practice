import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import ButtonComponent from '../ButtonComponent';
import LinkComponent from '../LinkComponent';
import CartItemsList from './CartItemList';

const Cart: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    // let navigate = useNavigate();

    return (
        <div className='container mx-auto max-w-7xl pt-5 pb-10 px-5 md:px-10 mt-14 md:mt-0 dark:text-gray-400'>
            <h1 className='text-3xl md:text-4xl md:text-left md:ml-6 mb-5 '>
                Корзина
            </h1>
            {cartItems.length ? (
                <CartItemsList />
            ) : (
                <p className='mt-14 text-xl md:text-2xl px-10 h-52'>
                    Ваша корзина пуста
                </p>
            )}

            {/* <ButtonComponent
                children='Вернуться назад'
                onClick={() => navigate(-1)}
            /> */}
            <LinkComponent children='Вернуться назад' to='/' />
            {/* <ButtonComponent
                children='Очистить корзину'
                onClick={() => navigate(-1)}
            /> */}
        </div>
    );
};

export default Cart;
