import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./pages/CommentList";
import EditComment from "./pages/EditComment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Comments/>}></Route>
          <Route path="/edit/:id" element={<EditComment/>}></Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;