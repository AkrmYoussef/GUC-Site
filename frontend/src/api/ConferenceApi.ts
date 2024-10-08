import axios from "axios";
import { ConferenceResponse } from "../type";
import { Dayjs } from "dayjs";

export const getAllConferences = async (): Promise<ConferenceResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/conference/viewAllConferences`
  );
  return response.data;
};

export const createConference = async (
  title: string,
  link: string,
  deadline: Dayjs | null
): Promise<ConferenceResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/conference/addConference`,
    { title, link, deadline },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const editConference = async (
  id: string,
  title: string,
  link: string,
  deadline: Dayjs | null
): Promise<ConferenceResponse> => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/api/conference/updateConference/${id}`,
    { title, link, deadline }
  );
  return response.data;
};

export const deleteConference = async (id: string): Promise<void> => {
  await axios.delete(
    `${import.meta.env.VITE_API_URL}/api/conference/removeConference/${id}`
  );
};
