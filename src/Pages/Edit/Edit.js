import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import GradientBlock from '../../components/GradientBlock/GradientBlock';
import styles from './Edit.module.css';

export default function Edit({ match }) {
  const currentId = match.params.id;
  const currentItem = useSelector(state =>
    state.gradient.items.find(item => item.id === currentId),
  );

  const initialState = currentItem;

  return (
    <>
      <div className={styles.EditBlock}>
        <h1 className="title">Edit</h1>
        <Form initialState={initialState} action="edit" />

        {currentItem && <GradientBlock item={currentItem} />}
      </div>
    </>
  );
}
