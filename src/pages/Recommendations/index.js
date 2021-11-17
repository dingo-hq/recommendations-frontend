import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../../components/Items/ItemCard';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles.module.css';

const Recommendations = ({ recommendations }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const handleItemSubmit = () => {
        setIsSubmitting(true);
    };

    return (
        <section className={styles.container}>
            <header className="App-header">
                <h1 className={styles.title}>Top Recommendations</h1>
                <p className={styles.subtitle}>
                    Based on your order from Bopomofo Cafe&mdash;Select an item
                    below for a sweet surprise!
                </p>
            </header>
            <main>
                <ul className={styles.list}>
                    {recommendations.map(({ name, squareId }) => (
                        <ItemCard
                            name={name}
                            key={squareId}
                            id={squareId}
                            onClick={handleItemClick}
                            isSelected={selectedItemId === squareId}
                        />
                    ))}
                </ul>
            </main>
            <PrimaryButton
                className={styles.button}
                size="large"
                onClick={handleItemSubmit}
                isLoading={isSubmitting}
            >
                Submit
            </PrimaryButton>
        </section>
    );
};

Recommendations.propTypes = {
    recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recommendations;
