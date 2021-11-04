import React, { useState } from 'react';
import ItemCard from '../ItemCard';
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

const ItemsList = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleClick = (id) => {
        setSelectedItemId(id);
    };

    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <ItemCard
                    item={item}
                    key={item.id}
                    onClick={handleClick}
                    isSelected={selectedItemId === item.id}
                />
            ))}
        </ul>
    );
};

export default ItemsList;
