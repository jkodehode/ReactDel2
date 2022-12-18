import Component01 from "./Component01/Component01";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import "./Main.css";

function Main(inner) {
  return (
    <>
      <div className="mainContainer">
        <Aside widget={faMedium}>left</Aside>
        <Component01 />
        <Aside widget={faMedium}>right</Aside>
      </div>
    </>
  );
}

function Aside(props) {
  const { widget } = props;
  return (
    <div className="aside">
      <p>{props.children}</p>
      <FontAwesomeIcon icon={widget} />
    </div>
  );
}

export default Main;
