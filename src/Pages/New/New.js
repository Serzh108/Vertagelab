import React from 'react';
import Form from '../../components/Form/Form';

const initialState = {
  start: '',
  end: '',
};

export default function New() {
  return (
    <div>
      <h1 className="title">New gradient</h1>
      <Form initialState={initialState} action="add" />
    </div>
  );
}
