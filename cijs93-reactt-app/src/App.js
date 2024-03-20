import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import TodoApp from './TodoApp/TodoApp';
import TrafficLightApp from './TrafficLightApp/TrafficLightApp'
import Header from './Header/Header';
import Lesson04 from './Lesson04/Lesson04';
import Lesson05 from './Lesson05/Lesson05';
import Lesson06 from './Lesson06/Lesson06';
import Lesson07 from './Lesson07/Lesson07';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/traffic-light" element={<TrafficLightApp />} />
        <Route path="/lesson-4" element={<Lesson04 />} />
        <Route path="/lesson-5" element={<Lesson05 />} />
        <Route path="/lesson-6" element={<Lesson06 />} />
        <Route path="/lesson-7" element={<Lesson07 />} />
      </Routes>
    </>
  );
}

export default App;
