import React from 'react';
import { addItemToCart } from '../../features/cartSlice';
import { Product } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { Theme, toast } from 'react-toastify';

const ProductCard: React.FC<Product> = (product) => {
    const dispatch = useAppDispatch();

    function handleAdditemInCart() {
        dispatch(addItemToCart(product));
        toast.success('Товар добавлен в корзину', {
            position: 'bottom-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='bg-white dark:bg-card-dark dark:text-text-dark group w-full sm:w-[200px] md:w-[180px] h-96 flex flex-col justify-between hover:shadow-md p-4 cursor-pointer'>
            <Link
                to={`product${product.id}`}
                className='flex flex-col items-center justify-between h-5/6 '
            >
                <img
                    className='h-3/6 w-40  object-fill'
                    src={product.image}
                    alt={product.title}
                />
                <span className='text-ellipsis overflow-hidden ...  h-22 w-full  mt-4'>
                    {product.title}
                </span>
                <span className='text-left w-full mt-2'>${product.price}</span>
            </Link>

            <button
                onClick={() => handleAdditemInCart()}
                className='h-10 w-full bg-gray-400 text-white no-sens:opacity-0  hover:bg-lime-500 group-hover:opacity-100 duration-300'
            >
                В корзину
            </button>
        </div>
    );
};

export default ProductCard;