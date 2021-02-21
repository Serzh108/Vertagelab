import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editGradient } from '../../redux/gradientOperations';
// import calcGradient from '../../helpers/calcGradient';
import Form from '../../components/Form/Form';
import GradientBlock from '../../components/GradientBlock/GradientBlock';
import styles from './Edit.module.css';

let initState = {};

export default function Edit({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentId = match.params.id;
  // console.log('currentId :', currentId);
  const currentItem = useSelector(state =>
    state.gradient.items.find(item => item.id === currentId),
  );
  // console.log('currentItem :', currentItem);
  const [editedItem, setEditedItem] = useState(initState);

  useEffect(() => {
    if (currentItem) {
      setEditedItem(currentItem);
      // initState = { ...currentItem };
    }
  }, [currentItem]);

  // ===----------------===
  const inputHandler = event => {
    const { name, value } = event.target;
    setEditedItem(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===----------------===
  const submitHandler = e => {
    e.preventDefault();
    dispatch(editGradient(editedItem));
    history.push('/');
  };
  // ===========---=============

  return (
    <>
      <div className={styles.EditBlock}>
        <h1 className="title">Edit</h1>
        {/* <form className={styles.form} onSubmit={submitHandler}>
          <input
            name="start"
            type="text"
            value={editedItem.start}
            onChange={inputHandler}
            className={styles.input}
            // placeholder="start gradient"
            required
          />
          <input
            name="end"
            type="text"
            value={editedItem.end}
            onChange={inputHandler}
            className={styles.input}
            // placeholder="end gradient"
            required
          />
          <button type="submit" title="edit gradient" className={styles.button}>
            edit gradient
          </button>
        </form> */}
        <Form
          submitHandler={submitHandler}
          inputHandler={inputHandler}
          editedItem={editedItem}
          action="edit"
        />

        <GradientBlock item={editedItem} />
      </div>
    </>
  );
}
