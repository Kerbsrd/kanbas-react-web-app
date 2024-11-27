import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchAllEnrollmentsForUser = async (userID: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${userID}`);
  return data;
};
export const createEnrollment = async (enrollment: {user: string, course: string}) => {
    const { data } = await axios.post(ENROLLMENTS_API, enrollment);
    return data;
  };
  export const deleteEnrollment = async (enrollmentID: string) => {
    const { data } = await axios.delete(`${ENROLLMENTS_API}/${enrollmentID}`);
    return data;
  };