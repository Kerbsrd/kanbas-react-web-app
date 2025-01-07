import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
const initialState = {
    quizzes: quizzes || [],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
         _id: new Date().getTime().toString(),
      name: quiz.name,
      course: quiz.course, 
      instructions: quiz.instructions,
      type: quiz.type,
      due: quiz.dueDate,
      from: quiz.availableFrom,
      until: quiz.availableUntil,
      questionCount: quiz.questionCount,
      points: quiz.points,
      time: quiz.time,
      moreAttempts: quiz.moreAttempts,
      possibleAttempts: quiz.possibleAttempts,
      showAnswers: quiz.showAnswers,
      //after Due, Close, Submit
      oneQuestionDisplay: quiz.oneQuestionDisplay,
      questionLock: quiz.questionLock,
      lockDown: quiz.lockDown,
      shuffle: quiz.shuffle,
      accessCode: quiz.accessCode,
      published: quiz.published,
      assignmentGroup: quiz.assignmentGroup
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((a: any) => a._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;