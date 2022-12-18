import Component01 from "./Component01/Component01";
import "./Main.css";

function Main(inner) {
  return (
    <>
      <div className="mainContainer">
        <p>Aside</p>
        <Component01 />
        <p>Aside</p>
      </div>
    </>
  );
}

export default Main;

//ville egentlig bruke parameteret "inner" til å kunne hente Component01 via App.jsx
