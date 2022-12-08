import React, { useEffect, useState } from 'react';
import upArrow from '../icons/upArrow';

const BtnScrollTop: React.FC = () => {
    //динамически добавляемые стили для кнопки вверх
    const [upBtnVisible, setUpBtnVisible] = useState('opacity-0 -right-10');

    // функция плавного возврата на верх страницы
    function scrollToUp() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    // слушатель положения скролла на странице
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // при скролле более 400 изменяет стили кнопки
            if (window.scrollY > 400) {
                setUpBtnVisible('opacity-100 cursor-pointer');
            } else {
                setUpBtnVisible('opacity-0 -right-10 ');
            }
        });
    }, []);

    return (
        <div
            className={`w-10 h-10 bg-indigo-600 fixed bottom-5 right-5 transition-all duration-1000 text-white rounded-md flex justify-center items-center
            ${upBtnVisible}`}
            onClick={() => scrollToUp()}
        >
            {upArrow}
        </div>
    );
};

export default BtnScrollTop;
