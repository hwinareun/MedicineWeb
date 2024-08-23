import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idQuestions: ['test', 'test1', 'test2'],
  pwQuestions: ['ptest', 'ptest1', 'ptest2'],
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    // 추후 관리자 기능으로 구현
    setIdQuestion: () => {},
    setPwQuestion: () => {},
  },
});

export const { setIdQuestion, setPwQuestion } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
