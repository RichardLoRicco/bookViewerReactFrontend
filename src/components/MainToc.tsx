import { MainTocProps } from "../types"

const MainToc = ({ bookData, handleChapterClick, subheading }: MainTocProps) => {
  return (
    <div className="content"> 
        <h2 className="content-subhead">{subheading}</h2>

        <div className="pure-menu">
          <ul className="pure-menu-list">
            {bookData.chapters.map(chapter => {
              return <li key={chapter} className="pure-menu-item">
                <a href="#" className="pure-menu-link" onClick={handleChapterClick}>{chapter}</a>
            </li>
            })}
          </ul>
        </div>
      </div>
  )
};

export default MainToc;