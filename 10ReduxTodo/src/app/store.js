import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../feature/todoSlice';

export const store = configureStore({
  reducer: todoSlice //this is reducer only
}); 