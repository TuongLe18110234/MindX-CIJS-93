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
import Lesson10 from './Lesson10/Lesson10';
import AboutMe from './Lesson10/AboutMe/AboutMe';
import Profile from './Lesson10/Profile/Profile';
import Detail from './Lesson10/Detail/Detail';
import Lesson11 from './Lesson11/Lesson11';
import Lesson12 from './Lesson12/Lesson12';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/traffic-light" element={<TrafficLightApp />} />
        <Route path="/lesson-4" element={<Lesson04 />} />
        <Route path="/lesson-5" element={<Lesson05 />} />
        <Route path="/lesson-6" element={<Lesson06 />} />
        <Route path="/lesson-7" element={<Lesson07 />} />
        <Route path="/lesson-10" element={<Lesson10 />} >
          <Route path="/lesson-10/:id" element={<Detail />} />
          <Route path="/lesson-10/" element={<AboutMe />} />
          <Route path="/lesson-10/profile/" element={<Profile />} />
        </Route>
        <Route path="/lesson-11" element={<Lesson11 />} />
        <Route path="/lesson-12" element={<Lesson12 />} />
      </Routes>
    </>
  );
}

export default App;
