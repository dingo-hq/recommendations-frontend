import React from 'react';
import styles from './styles.module.css';

const PromoRedemption = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.name}>Store Name</h1>
                <p className={styles.description}>
                    Present this promotional offer to the store to redeem the
                    following
                </p>
            </div>
            <div className={styles.redemptionContainer}>
                <span className={styles.redemption}>
                    10% off 1 Matcha Milk Tea
                </span>
            </div>
            <p className={styles.note}>
                This promotion maye only redeemed once. This promotion will
                become invalid once the merchant applies the discount to your
                purchase.
            </p>
        </section>
    );
};

PromoRedemption.propTypes = {};

export default PromoRedemption;
