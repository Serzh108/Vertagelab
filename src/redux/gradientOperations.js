import shortid from 'shortid';
import { gradientSlice } from './gradientReducer';

const addGradient = data => (dispatch, getState) => {
  data = { ...data, id: shortid.generate() };
  dispatch(gradientSlice.actions.addGradient(data));
};

const editGradient = data => (dispatch, getState) => {
  // console.log('editGradient Operations: data = ', data);
  dispatch(gradientSlice.actions.editGradient(data));
};

const deleteGradient = data => (dispatch, getState) => {
  dispatch(gradientSlice.actions.deleteGradient(data));
};

export { addGradient, editGradient, deleteGradient };
