import axios from "axios";
import { EvaluationFormResponse } from "../type";

export const getAllEvaluationForms = async (): Promise<
  EvaluationFormResponse[]
> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/viewAllEvaluationForms`
  );
  return response.data;
};

export const createEvaluationForm = async (
  // evaluator: string, // Assuming UserResponse corresponds to the instructor's information
  evaluatedTA: string, // Assuming UserResponse corresponds to the TA's information
  semester: string,
  course: string
  // questions: QuestionAnswerResponse[], // Array of QuestionAnswerResponse objects
  // answers: {
  //   questionId: string; // Reference to QuestionAnswer _id
  //   answer: any; // The answer field, which can be of various types
  // }[]
): Promise<EvaluationFormResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/addEvaluationForm`,
    {
      // evaluator,
      evaluatedTA,
      semester,
      course,
      // questions,
      // answers,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const editEvaluationForm = async (
  evaluationFormId: string,
  questionAnswerId: string,
  answer: any, // The answer field, which can be of various types
  questionType: string
): Promise<EvaluationFormResponse> => {
  const response = await axios.patch(
    `${
      import.meta.env.VITE_API_URL
    }/api/evaluationform/updateEvaluationForm/${evaluationFormId}/answers/${questionAnswerId}`,
    { answer, questionType }
  );
  return response.data;
};

export const deleteEvaluationForm = async (id: string): Promise<void> => {
  await axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/api/evaluationform/removeEvaluationForm/${id}`
  );
};

// Get Instructor id from name
export const getInstructorId = async (
  instructorName: string
): Promise<string> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/getInstructorId`,

    {
      instructorName,
    }
  );
  return response.data;
};

// Get TA id from name
export const getTAId = async (taName: string): Promise<string> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/getTAId`,
    {
      taName,
    }
  );
  return response.data;
};

// Get TA name from id
export const getTAName = async (id: string): Promise<string> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/getTAName/${id}`
  );
  return response.data;
};

// Get Instructor Name from id
export const getInstructorName = async (id: string): Promise<string> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/evaluationform/getInstructorName/${id}`
  );
  return response.data;
};
