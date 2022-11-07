import React from 'react';
import { addItemToCart } from '../features/cartSlice';
import { Product } from '../features/productsSlice';
import { useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<Product> = (product) => {
    const dispatch = useAppDispatch();
    function handleAdditemInCart() {
        dispatch(addItemToCart(product));
    }

    return (
        <div className='group w-full h-96 flex flex-col justify-between  p-2 cursor-pointer'>
            <Link
                to={`product${product.id}`}
                className='flex flex-col items-center justify-between h-5/6'
            >
                <img
                    className='h-3/6 w-40  object-fill'
                    src={product.image}
                    alt={product.title}
                />
                <span className='text-ellipsis overflow-hidden ...  h-22 w-full group-hover:text-yellow-600 mt-4'>
                    {product.title}
                </span>
                <span className='text-left w-full mt-2'>${product.price}</span>
            </Link>

            <button
                onClick={() => handleAdditemInCart()}
                className='h-10 w-full text-white bg-yellow-600 hover:bg-yellow-500 opacity-0 group-hover:opacity-100'
            >
                В корзину
            </button>
        </div>
    );
};

export default ProductCard;
