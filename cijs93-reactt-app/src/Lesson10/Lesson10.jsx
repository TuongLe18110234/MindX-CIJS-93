import { Outlet } from "react-router-dom";

function Lesson10() {
  return (
    <>
      <h1>Lesson 10</h1>
      <Outlet />
      <h2>Below Outlet</h2>
    </>
  )  
}

export default Lesson10;