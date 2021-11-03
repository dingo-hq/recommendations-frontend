import React from 'react';
import ItemCard from '../components/ItemCard';
import styles from './styles.module.css';

function App() {
    return (
        <section className={styles.container}>
            <header className="App-header">
                <h1 className={styles.title}>Top Matches</h1>
                <p className={styles.subtitle}>
                    Based on your order from Bopomofo Cafe
                </p>
            </header>
            <main>
                <ul className={styles.cardList}>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </ul>
            </main>
        </section>
    );
}

export default App;
