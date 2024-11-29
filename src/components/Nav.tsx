import { NavProps } from "../types";

const Menu = ({ bookData, handleChapterClick, handleHomeClick }: NavProps) => {

  return (
    <div id="menu">
      <div className="pure-menu">
          <a className="pure-menu-heading" href="/" onClick={handleHomeClick} >Table of Contents</a>

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
}

export default Menu;