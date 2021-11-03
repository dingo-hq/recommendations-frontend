import React from 'react';
import mockImage from '../../matcha-milk-tea.png';
import styles from './styles.module.css';

const ItemCard = () => {
    return (
        <li className={styles.card}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.name}>Matcha Milk Tea</h2>
                    <p className={styles.description}>
                        Earthy, sweet, and milky. Made with our high quality
                        matcha.
                    </p>
                </div>
                <span className={styles.trend}>100 ordered today</span>
            </div>
            <img src={mockImage} className={styles.image} />
        </li>
    );
};

export default ItemCard;
