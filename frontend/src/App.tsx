import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Create from "./pages/create"
import Detail from "./pages/detail"
import Header from "./components/header"

const App = () => {
  return (


    <BrowserRouter>
      <div className="flex-1 bg-amber-50 bg-transparent" >
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/place/:id" element={<Detail />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App