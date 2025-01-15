import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import NewsPage from './pages/News.jsx';
import ContactPage from './pages/contact.jsx';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/News' element={<NewsPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;