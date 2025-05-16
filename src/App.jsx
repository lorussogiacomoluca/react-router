import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Posts from "./Posts/Posts";
import "./index.css";
import DefaultLayout from "./Layouts/DefaultLayout";
import DetailPost from "./Posts/DetailPost";
import TagPosts from "./Posts/TagPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<DetailPost />} />
            <Route path="tag/:tag" element={<TagPosts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
