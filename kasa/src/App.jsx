import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./pages/Error"
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import './styles/App.scss'
import Appartement from "./pages/Appartement";
import Banner from "./components/Banner/Banner";


function App() {
    return (
        <div >

            <BrowserRouter>

                <Banner />
                <div className="page-container">

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/:id" element={<Appartement />} />
                            <Route path="*" element={<Error />} />

                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>


        </div>

    )

}

export default App


