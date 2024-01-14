import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"

const App = () => {
  return(
    <>
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route />
        </Route>
      </Routes>
    </div>
    </>
  )
}
export default App;