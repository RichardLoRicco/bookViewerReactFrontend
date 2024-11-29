import { useState, useEffect, SyntheticEvent } from 'react'

import Nav from './components/Nav';
import Header from './components/Header';
import { getAllChapters, getChapter } from './services/bookService';
import { chapterToUrlParam } from './utils/utils';

import { BookData } from './types';
import './App.css'
import MainToc from './components/MainToc';
import Chapter from './components/Chapter';


const App = () => {
  // not sure about name for this
  const [bookData, setbookData] = useState<BookData>({
    book: '',
    chapters: []
  });
  const [chapterContent, setChapterContent] = useState<string>('');
  const [subheading, setSubheading] = useState<string>('Table of Contents');

  useEffect(() => {
    getAllChapters()
      .then(data => {
        setbookData(data);
      })
  }, [])

  const handleChapterClick = (event: SyntheticEvent) => {
    event.preventDefault();
    const chapterName = event.currentTarget.textContent as string;
    const chapterParam = chapterToUrlParam(chapterName);
    getChapter(chapterParam)
      .then(data => {
        setChapterContent(data);
        setSubheading(chapterName);
      })
    // get request


  }

  const handleHomeClick = (event: SyntheticEvent) => {
    event.preventDefault();
    setSubheading('Table of Contents');
    setChapterContent('');
  }


  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
      </a>

      <Nav bookData={bookData} handleChapterClick={handleChapterClick} handleHomeClick={handleHomeClick}/>

      <div id="main">
        <Header />
        
        {chapterContent ?        
          <Chapter chapterContent={chapterContent} subheading={subheading}/>
          : <MainToc bookData={bookData} handleChapterClick={handleChapterClick} subheading={subheading}/>
        }

      </div>
  </div>
  )
}

export default App
