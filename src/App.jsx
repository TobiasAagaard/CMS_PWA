import { BlogList } from "./Components/Blog/BlogList"
import { BlogDetails } from "./Components/Blog/BlogDetails"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<BlogList />} />
          <Route path="blogList" element={<BlogList />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
