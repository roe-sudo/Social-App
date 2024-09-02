
import Mainhome from "./Home/Mainhome";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Router>
    );
}

export default App;
