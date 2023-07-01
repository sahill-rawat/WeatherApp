import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

function App() {
  const sharedData = 'Delhi';
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
