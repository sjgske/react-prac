import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("일기가 저장되었습니다!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div className="field">
        <label htmlFor="author">이름</label>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div className="field">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <label htmlFor="emotion">오늘의 감정점수 : </label>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
