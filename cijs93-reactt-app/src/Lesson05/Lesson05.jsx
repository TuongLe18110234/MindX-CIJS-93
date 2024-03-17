import { useState } from "react"

function Lesson05() {
  const onClickTitle = () => {
    console.log('Click Title')
  }

  const onClick = () => {
    console.log('Click Me')
  }

  let [count, setCount] = useState(10); // [Giá trị ban đầu, Hàm để cập nhật giá trị]
  console.log(count);
  const handleClick = () => {
    setCount(count * 2); // Gán giá trị cho count giá trị truyền vào ==> Có thay đổi giao diện
    console.log('Count: ', count);
  }

  return (
    <>
      <h1 onClick={onClickTitle}>Lesson 05</h1>
      <button onClick={onClick}>Click Me</button>
      <button onClick={() => {console.log('Click Me Below')}}>Click Me Below</button>


      <div>
        <span>{count}</span>
        <button onClick={handleClick}>Increase</button>
      </div>

      <h2>Couters</h2>
      <Couter />
      <Couter />
      <Couter />
    </>
  )
}

const Couter = () => {
  const [counter, setCount] = useState({count: 0}); // PNL
  const [counter2, setCount2] = useState({count: 0}); // PNL


  const onIncrease = () => {
    counter.count = counter.count + 1;
    console.log(counter);
    setCount({...counter}); // PXL
  }

  const onIncreasePrev = () => {
    setCount((giaTriTruocDo) => {
      console.log(giaTriTruocDo);
      return {
        ...giaTriTruocDo,
        count: giaTriTruocDo.count + 1
      }
    })
  }

  return (
    <div>
      <>
        <span>{counter.count}</span>
        <button onClick={onIncreasePrev}>Increase</button>
      </>
      <>
        <span>{counter2.count}</span>
        <button onClick={onIncreasePrev}>Increase Couter 2</button>
      </>
    </div>
  )
}

export default Lesson05;