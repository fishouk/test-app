import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../UI/layout';
import ButtonUI from '../../UI/buttonUI';

import { addFirstSquare, deleteLastSquare } from '../../features/squares/squaresSlice';

import styles from './home.module.scss';

export default function Home() {
    const [animationAction, setAnimationAction] = useState('');
    const squares = useSelector((state) => state?.squares?.items);
    const dispatch = useDispatch();

    const handleAddFirstSquare = () => {
        setAnimationAction('add');
        dispatch(addFirstSquare());
    };

    const handleDeleteItem = () => {
        setAnimationAction('delete');
    };

    const handleAnimationEnd = (index) => {
        if (animationAction === 'delete' && index === squares.length - 1) {
            dispatch(deleteLastSquare());
            setAnimationAction('');
        }
    };

    return (
        <Layout>
            <div className={`container ${styles.homeContainer}`}>
                <h1 className={`${styles.homeTitle}`}>Тестовое задание</h1>

                <div className={`${styles.homeButtonContainer}`}>
                    <ButtonUI text={'Добавить'} variant="green" onClick={handleAddFirstSquare} />
                    <ButtonUI text={'Удалить'} variant="red" onClick={handleDeleteItem} />
                </div>

                {!!squares?.length && (
                    <div className={`${styles.homeDivsContainer}`}>
                        {squares?.map((item, index) => (
                            <div
                                key={item?.id}
                                style={{ backgroundColor: item?.color }}
                                className={`${styles.homeDiv} ${index === 0 && animationAction === 'add' ? styles.homeDivSlideIn : ''} ${index === squares?.length - 1 && animationAction === 'delete' ? styles.homeDivSlideOut : ''}`}
                                onAnimationEnd={() => handleAnimationEnd(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}
