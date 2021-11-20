import React, { useState } from 'react';
import { Dialog } from 'evergreen-ui';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import Particles from 'react-tsparticles';
import PrimaryButton from '../../components/PrimaryButton';
import logo from '../../assets/logo.png';
import sunAnimation from '../../assets/cloud.json';
import styles from './styles.module.css';

const particlesParams = {
    fpsLimit: 60,
    interactivity: {
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
        },
    },
    particles: {
        color: {
            value: '#E38824',
        },
        move: {
            direction: 'top',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 1,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 8,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: true,
            value: 100,
        },
    },
    detectRetina: true,
};

const PromoRedemption = ({ discount, hasRedeemed, item, onRedeem }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isRedeemConfirmLoading, setIsRedeemConfirmLoading] = useState(false);

    const handleRedeemConfirmClick = () => {
        try {
            onRedeem();
        } catch (error) {
        } finally {
            setShowConfirmModal(false);
        }
    };

    const promoMessage = `${discount}% off 1 ${item.name}`;

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
                            {promoMessage}
                        </span>
                        {hasRedeemed && (
                            <span className={styles.stamp}>Redeemed</span>
                        )}
                    </div>
                    {!hasRedeemed ? (
                        <PrimaryButton
                            size="large"
                            onClick={() => setShowConfirmModal(true)}
                        >
                            Redeem Now
                        </PrimaryButton>
                    ) : (
                        <div className={styles.buttonFiller} />
                    )}
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
                onConfirm={handleRedeemConfirmClick}
                confirmLabel="Redeem"
                isConfirmLoading={isRedeemConfirmLoading}
            >
                Are you sure you want to redeem this promotion? Once redeemed it
                can no longer be used again.
            </Dialog>
            <Particles className={styles.particles} options={particlesParams} />
        </div>
    );
};

PromoRedemption.propTypes = {
    discount: PropTypes.number.isRequired,
    hasRedeemed: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    onRedeem: PropTypes.func.isRequired,
};

export default PromoRedemption;
