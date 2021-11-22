import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toaster } from 'evergreen-ui';
import ItemCard from '../../components/Items/ItemCard';
import PrimaryButton from '../../components/PrimaryButton';
import submitItem from '../../api/submitItem';
import styles from './styles.module.css';

const Recommendations = ({
    recommendations,
    onItemSubmitComplete,
    recommendationId,
}) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const handleItemSubmit = async () => {
        try {
            setIsSubmitting(true);

            await submitItem(recommendationId, selectedItemId);

            onItemSubmitComplete();
        } catch {
            toaster.danger(
                'An error occurred while trying to submit your item',
            );
        } finally {
            setIsSubmitting(false);
        }
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
                    {recommendations.map(
                        ({ squareId, itemInfo: { imageData, itemData } }) => (
                            <ItemCard
                                name={itemData?.name}
                                description={itemData?.description}
                                key={squareId}
                                id={squareId}
                                imageUrl={imageData?.url}
                                onClick={handleItemClick}
                                isSelected={selectedItemId === squareId}
                            />
                        ),
                    )}
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
    onItemSubmitComplete: PropTypes.func.isRequired,
    recommendationId: PropTypes.string.isRequired,
};

export default Recommendations;
