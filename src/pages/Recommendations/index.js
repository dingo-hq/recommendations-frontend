import React from 'react';
import ItemsList from '../../components/Items/ItemsList';
import styles from './styles.module.css';

const Recommendations = () => {
    return (
        <section className={styles.container}>
            <header className="App-header">
                <h1 className={styles.title}>Top Matches</h1>
                <p className={styles.subtitle}>
                    Based on your order from Bopomofo Cafe
                </p>
            </header>
            <main>
                <ItemsList />
            </main>
            <button type="button" className={styles.button}>
                Submit
            </button>
        </section>
    );
};

Recommendations.propTypes = {};

export default Recommendations;
