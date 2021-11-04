import React, { useState } from 'react';
import ItemCard from '../components/ItemCard';
import styles from './styles.module.css';

const items = [
    {
        id: 1,
        name: 'Matcha Milk Tea',
        description:
            'Earthy, sweet, and milky. Made with our high quality matcha.',
        orderCount: 100,
    },
    {
        id: 2,
        name: 'Matcha Milk Tea',
        description:
            'Earthy, sweet, and milky. Made with our high quality matcha.',
        orderCount: 100,
    },
    {
        id: 3,
        name: 'Matcha Milk Tea',
        description:
            'Earthy, sweet, and milky. Made with our high quality matcha.',
        orderCount: 100,
    },
];

function App() {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleClick = (id) => {
        setSelectedItemId(id);
    };

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
                    {items.map((item) => (
                        <ItemCard
                            item={item}
                            key={item.id}
                            onClick={handleClick}
                            isSelected={selectedItemId === item.id}
                        />
                    ))}
                </ul>
            </main>
        </section>
    );
}

export default App;
