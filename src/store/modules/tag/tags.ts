import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: [] as API.TagDTO[],
  reducers: {
    setTags: (state, action: PayloadAction<API.TagDTO[]>) => {
      return {
        ...action.payload,
      };
    },
  },
});

// 修改状态
export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;
