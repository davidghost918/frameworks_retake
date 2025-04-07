import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.find(el => el.id === action.payload);
      if (item && item.count < 25) item.count += 1;
    },
    decrement: (state, action) => {
        const index = state.findIndex(el => el.id === action.payload);
        if (index !== -1 && state[index].count > 0) {
          state[index].count -= 1;
          // Если count равен 0, удаляем элемент из массива
          if (state[index].count === 0) {
            state.splice(index, 1);
          }
        }
      },
    addItem: (state, action) => {
      const title = action.payload;
      const newItem = {
        id: Date.now(),
        title,
        count: 1,
      };
      state.push(newItem);
    }
  },
});

export const { increment, decrement, addItem } = cartSlice.actions;
export default cartSlice.reducer;
