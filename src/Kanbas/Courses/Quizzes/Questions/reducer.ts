import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../../Database";
const initialState = {
   // currentAssignment: null,
    questions: questions || [],
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, { payload: question }) => {
      const newQuestion: any = {
      _id: new Date().getTime().toString(),
      title:question.title,
      quiz: question.quiz,
      type: question.type,
      qText: question.qText,
      answer: question.answer,
      points: question.points,
      choices: question.choices
      };
      state.questions = [...state.questions, newQuestion] as any;
    },
    deleteQuestion: (state, { payload: quizId }) => {
      state.questions = state.questions.filter((a: any) => a._id !== quizId);
    },
    updateQuestion: (state, { payload: quiz }) => {
      state.questions = state.questions.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
  },
});
export const { addQuestion, deleteQuestion, updateQuestion } =
questionsSlice.actions;
export default questionsSlice.reducer;