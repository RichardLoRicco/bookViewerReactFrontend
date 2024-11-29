import { SyntheticEvent } from "react";

export interface BookData {
  book: string;
  chapters: string[];
}

export interface NavProps {
  bookData: BookData;
  handleChapterClick: (event: SyntheticEvent) => void;
  handleHomeClick: (event: SyntheticEvent) => void;
}

export interface MainTocProps {
  bookData: BookData;
  handleChapterClick: (event: SyntheticEvent) => void;
  subheading: string;
}

export interface ChapterProps {
  chapterContent: string;
  subheading: string;
}