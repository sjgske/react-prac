import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {/* index(map함수의 두번째인자)를 key로 사용하면 리스트아이템을 삭제했을때 문제가생길수있다 */}
        {diaryList.map((el) => (
          // prop으로 스프레드 연산자!
          <DiaryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
