import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./pages/CommentList";
import EditComment from "./pages/EditComment";
import AddComment from "./pages/addComment";
import FavoriteComments from "./pages/FavoriteComments";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Comments/>}></Route>
          <Route path="/edit/:id" element={<EditComment/>}></Route>
                <Route path="/add" element={<AddComment/>}></Route>
                                <Route path="/favorites" element={<FavoriteComments/>}></Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;