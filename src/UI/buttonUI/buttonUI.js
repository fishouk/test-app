import React from 'react';

import styles from './buttonUI.module.scss';

export default function ButtonUI({
    text = '',
    type = 'button',
    variant = '',
    secondary = false,
    widthAuto = false,
    customClass = '',
    ...rest
}) {
    return (
        <button
            className={`${styles.buttonUI} ${widthAuto ? '!w-auto' : ''} ${secondary ? styles.buttonUI__secondary : ''} ${variant ? styles[variant] : ''} ${customClass}`}
            type={type}
            {...rest}
        >
            {text}
        </button>
    );
}
