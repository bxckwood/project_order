import { Routes, Route, Link} from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Layout from "./layout/Layout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Mainpage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
