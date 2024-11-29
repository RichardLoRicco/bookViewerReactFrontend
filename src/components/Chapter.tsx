import { ChapterProps } from "../types";

const Chapter = ({ chapterContent, subheading}: ChapterProps) => {
  return (
  <div className="content"> 
    <h2 className="content-subhead">{subheading}</h2>

    <p>{chapterContent}</p>
  </div>
  )
}

export default Chapter;