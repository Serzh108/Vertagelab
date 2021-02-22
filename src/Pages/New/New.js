import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGradient } from '../../redux/gradientOperations';
import Form from '../../components/Form/Form';
import validateValue from '../../helpers/validateValue';
import styles from './New.module.css';

const initialState = {
  start: '',
  end: '',
};

export default function New() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newGradient, setNewGradient] = useState(initialState);
  const [errorFormat, setErrorFormat] = useState(true);
  // ===----------------===
  const inputHandler = event => {
    const { name, value } = event.target;

    if (!validateValue({ [name]: value })) {
      setErrorFormat(true);
      // return;
    } else setErrorFormat(false);

    setNewGradient(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===----------------===
  const submitHandler = e => {
    e.preventDefault();
    dispatch(addGradient(newGradient));
    history.push('/');
  };
  // ===========---=============

  return (
    <>
      <div>
        <h1 className="title">New gradient</h1>
        <Form
          initialState={initialState}
          // submitHandler={submitHandler}
          // inputHandler={inputHandler}
          // editedItem={null}
          // errorFormat={errorFormat}
          action="add"
        />
      </div>
    </>
  );
}
