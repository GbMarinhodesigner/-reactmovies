import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"

import { Router } from "./Router"
import { Header } from "./components/Header"
import './global.css'



function App() {


  return (
    <BrowserRouter>

      <Header />

      <Router />

      

      <Footer />

    </BrowserRouter>
  )
}

export default App
