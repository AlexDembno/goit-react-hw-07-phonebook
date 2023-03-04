import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contactsSlice/contacts-slice';
import filterSlise from './filterSlise/filter-slise';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlise,
});
