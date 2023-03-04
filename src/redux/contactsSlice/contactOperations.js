import * as api from '../../services/phoneBook-Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-get-all',
  async (_, thunkApi) => {
    try {
      const response = await api.getContacts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/fetch-add',
  async (data, thunkApi) => {
    try {
      const response = await api.addContacts(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetch-delete',
  async (id, thunkApi) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
