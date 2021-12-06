import main from "../careerly_css/main.css";
import {
  FaUserCircle,
  FaMedapps,
  FaShareAlt,
  FaRegCommentDots,
  FaEllipsisV,
} from "react-icons/fa";

function CareerlyMain() {
  return (
    <main>
      <body className="posts">
        <div className="writer">
          <FaUserCircle size="34" className="writer" />
          <h5 className="writer">
            username <br /> 2일전
          </h5>
        </div>
        <div>
          <h5>
            제품 중심의 사고란 무엇인가 <br />
            <br />
            1. 사람들은 사용자 경험(User Experience), 소위 말하는 UX를 떠올릴
            때, 사용자의 삶을 더 쉽게 만들어주는, 1) 단순하고, 2) 아름다우며, 3)
            사용하기 쉬운, 일련의 기능들을 떠올립니다.
            <h5 className="softly">... 더 보기</h5>
          </h5>
          <div className="linkbox">
            <h5>왜 제품을 중심적으로 사고 해야하는가?</h5>
            <h5 className="softly">brunch</h5>
          </div>
          <div className="cgd">
            <h5>
              <FaMedapps size="23" color="#83dcb7" />
              추천해요
            </h5>
            <h5>
              <FaShareAlt size="23" color="#83dcb7" />
              공유하기
              <FaEllipsisV size="15" color="#767676" />
              <FaRegCommentDots size="23" color="#83dcb7" />
              댓글
            </h5>
          </div>
        </div>
      </body>
    </main>
  );
}

export default CareerlyMain;
