import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CommentType } from "../../Types/commentType";

// interface CommentType {
//   id?: string;
//   name: string;
//   email: string;
//   body: string
// }

type InitialState = {
  comments: CommentType[];
};

const initialState: InitialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    //Actions
    setComments: (state, action: PayloadAction<CommentType[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<CommentType>) => {
      state.comments = [action.payload, ...state.comments];
    },
    editComment: (state, action: PayloadAction<CommentType>) => {
      state.comments = state.comments.map((com)=> com.id === action.payload.id ? action.payload : com);
    },
     toggleFavorite: (state, action: PayloadAction<CommentType[]>) => {
      state.comments = action.payload;
    },

  },
});

export const { setComments, addComment, editComment, toggleFavorite } = commentsSlice.actions;
export default commentsSlice.reducer;
