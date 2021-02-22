import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Item from '../../components/Item/Item';
import styles from './Home.module.css';

export default function Home() {
  const items = useSelector(state => state.gradient.items);

  return (
    <div className={styles.HomeBlock}>
      <ul className={styles.itemList}>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <NavLink to="/new" className={styles.link}>
        Add gradient
      </NavLink>
    </div>
  );
}
