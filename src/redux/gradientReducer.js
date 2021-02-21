import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
};

export const gradientSlice = createSlice({
  name: 'gradient',
  initialState: state,
  reducers: {
    addGradient: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    editGradient: (state, { payload }) => ({
      ...state,
      items: [
        ...state.items.map(item =>
          item.id === payload.id
            ? {
                ...item,
                start:
                  item.start === payload.start ? item.start : payload.start,
                end: item.end === payload.end ? item.end : payload.end,
              }
            : item,
        ),
      ],
    }),
    deleteGradient: (state, { payload }) => ({
      ...state,
      items: [...state.items.filter(item => item.id !== payload)],
    }),
  },
});
