import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김단헌",
    content: "hihihihi",
    emotion: 5,
    // getTime() -> 현재시간을 ms초로 바꿔줌 (데이터형식 number로 하기위해)
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "침착맨",
    content: "그건아마우리의",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "주펄",
    content: "잘못은아닐거야",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
