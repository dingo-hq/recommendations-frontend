import React, { useState } from 'react';
import { Dialog } from 'evergreen-ui';
import PrimaryButton from '../../components/PrimaryButton';
import logo from '../../assets/logo.png';
import styles from './styles.module.css';

const PromoRedemption = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isRedeemLoading, setIsRedeemLoading] = useState(false);

    const handleRedeemClick = () => {};

    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.name}>Bopomofo Cafe</h1>
                    <p className={styles.description}>
                        Present this screen to the store to redeem the following
                        promotion
                    </p>
                </div>
                <div className={styles.redemption}>
                    <div className={styles.promoContainer}>
                        <span className={styles.promoMessage}>
                            10% off 1 Matcha Milk Tea
                        </span>
                    </div>
                    <PrimaryButton
                        size="large"
                        onClick={() => setShowConfirmModal(true)}
                    >
                        Redeem Now
                    </PrimaryButton>
                </div>
                <p className={styles.note}>
                    This promotion may only redeemed once. This promotion will
                    become invalid once the merchant applies the discount to
                    your purchase.
                </p>
            </section>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} />
            </div>
            <Dialog
                isShown={showConfirmModal}
                title="Redeem Promotion"
                onCloseComplete={() => setShowConfirmModal(false)}
                onConfirm={handleRedeemClick}
                confirmLabel="Redeem"
                isConfirmLoading={isRedeemLoading}
            >
                Are you sure you want to redeem this promotion? Once redeemed it
                can no longer be used again.
            </Dialog>
        </div>
    );
};

PromoRedemption.propTypes = {};

export default PromoRedemption;
