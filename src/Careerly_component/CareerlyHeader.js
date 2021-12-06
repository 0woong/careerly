import header from "../careerly_css/header.css";
import {
  FaSistrix,
  FaRocketchat,
  FaBell,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

function CareerlyHeader() {
  return (
    <header className="navBar">
      <div>
        <img
          src="https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"
          className="navLogo"
          alt="logo"
        />
      </div>

      <div>
        <img
          src="https://careerly.co.kr/_next/static/images/img_symbol_careerly-6bbf6c47c1afb1b1c778f86a78b80890.png"
          className="smallLogo"
          alt=""
        />
      </div>

      <div>
        <ul className="menu">
          <li className="menuList">프로필 탐색</li>
          <li className="menuList">인턴 채용공고</li>
        </ul>
      </div>

      <div className="center"></div>

      <div>
        <FaSistrix className="icon" size="24" />
        <FaRocketchat className="icon" size="24" />
        <FaBell className="icon" size="24" />
        <FaUserCircle className="userIcon" size="34" />
      </div>

      <div>
        <FaBars className="hamburger" size="24" />
      </div>
    </header>
  );
}

export default CareerlyHeader;
