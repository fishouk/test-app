import React from 'react';

import styles from './spinner.module.scss';

export default function Spinner() {
    return (
        <div className={styles.loadingSpinnerWrapper}>
            <div className={styles.loadingSpinner} />
        </div>
    );
}
