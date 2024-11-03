import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Create from "./pages/create"
import Detail from "./pages/detail"
import Header from "./components/header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (


    <BrowserRouter>
      <div className="flex-1 bg-amber-50 bg-transparent" >
        <ToastContainer />
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