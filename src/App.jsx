import { Route, Routes } from "react-router-dom"
import UsersComp from "./components/UsersComp"
import PostsComp from "./components/PostsComp"
import TodosComp from "./components/TodosComp"
import AlbumComp from "./components/AlbumComp"
import CommentsComp from './components/CommentsComp';
import PhotosComp from "./components/PhotosComp"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<UsersComp/>} />
        <Route path="posts/:id" element={<PostsComp/>} />
        <Route path="todos/:id" element={<TodosComp/>} />
        <Route path="album/:id" element={<AlbumComp/>} />
        <Route path="comments/:id" element={<CommentsComp/>} />
        <Route path="photo/:id" element={<PhotosComp/>} />
      </Routes>
    </>
  )
}

export default App