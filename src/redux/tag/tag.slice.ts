import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Tag } from '../../entities/Tag';
import TagService from '../../services/TagService';

type TagState = {
  tags: Tag[],
};

const initialState: TagState = {
    tags: [],
};

export const tagService = new TagService();

export const getTags = createAsyncThunk(
  'tags/GetTags',
  async () => await tagService.GetTags()
);

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state) => ({
      ...state,
      tags: [],
    }));
    builder.addCase(getTags.rejected, (state, action) => ({
      ...state,
      tags: [],
    }));
    builder.addCase(getTags.fulfilled, (state, action) => ({
      ...state,
      tags: action.payload,
    }));
  }
});

export default tagSlice.reducer;
