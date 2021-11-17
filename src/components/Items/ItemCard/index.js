import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.css';

const ItemCard = ({
    onClick,
    name,
    description,
    orderCount,
    id,
    isSelected,
    imageUrl,
}) => {
    return (
        <li
            className={classNames(styles.card, isSelected && styles.selected)}
            onClick={() => onClick(id)}
        >
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <span className={styles.trend}>{orderCount} ordered today</span>
            </div>
            <img src={imageUrl} className={styles.image} />
        </li>
    );
};

ItemCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    orderCount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string,
};

ItemCard.defaultProps = {
    description: '',
    imageUrl: '',
};

export default ItemCard;
