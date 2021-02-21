import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteGradient } from '../../redux/gradientOperations';
import calcGradient from '../../helpers/calcGradient';
import styles from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector(state => state.gradient.items);

  // ===----------------===
  // ===----------------===
  const editIconHandler = e => {
    const li = e.target.closest('LI');
    console.log('Home: id = ', li.id);
    history.push(`/edit/${li.id}`);
  };

  const deleteIconHandler = e => {
    const li = e.target.closest('LI');
    dispatch(deleteGradient(li.id));
  };
  // ===========---=============
  return (
    <>
      <div className={styles.HomeBlock}>
        <h1>Home</h1>
        <ul>
          {items.map(item => (
            <li key={item.id} id={item.id}>
              <p style={{ background: calcGradient(item.start, item.end) }}>
                Start value: {item.start} End value: {item.end}
              </p>
              <EditIcon
                style={{ color: 'red', fontSize: 32 }}
                onClick={editIconHandler}
              />
              <DeleteIcon onClick={deleteIconHandler} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
