import axios from "axios";

import { BookData } from "../types";

const baseUrl = 'http://localhost:3000/api'

export const getAllChapters = () => {
  return axios.get<BookData>(`${baseUrl}/toc`)
    .then(response => response.data);
}

export const getChapter = (chapterTitle: string) => {
  return axios.get<string>(`${baseUrl}/${chapterTitle}`)
    .then(response => response.data);
}