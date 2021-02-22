import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import calcGradient from '../../helpers/calcGradient';
import { deleteGradient } from '../../redux/gradientOperations';
import styles from './Item.module.css';
import GradientBlock from '../GradientBlock/GradientBlock';

export default function Item({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const editIconHandler = e => {
    const li = e.target.closest('LI');
    // console.log('Home: id = ', li.id);
    history.push(`/edit/${li.id}`);
  };

  const deleteIconHandler = e => {
    const li = e.target.closest('LI');
    dispatch(deleteGradient(li.id));
  };

  return (
    <li key={item.id} id={item.id} className={styles.item}>
      <GradientBlock item={item} />
      <EditIcon className={styles.icon} onClick={editIconHandler} />
      <DeleteIcon className={styles.icon} onClick={deleteIconHandler} />
    </li>
  );
}
