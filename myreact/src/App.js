import "./index.scss";
import Box from "./components/box";
function App() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <a href="#" id="nav__Item">
              Layout1
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header">
        <span class="header__page">
          <p>Page Heading</p>
        </span>
        <span class="header__text">Secondary Text</span>
      </div>
      <hr />
      <Box />
      <Box />
      <Box />
      <hr className="horizon" />
      <div className="copy">Copyright &copy; Your Website 2014</div>
    </>
  );
}

export default App;
