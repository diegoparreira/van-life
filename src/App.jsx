import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail/VanDetail";
import Layout from "./components/Layout/Layout";
import Host from "./pages/Host/Host";
import HostDashboard from "./pages/Host/HostDashboard/HostDashboard";
import HostVans from "./pages/Host/HostVans/HostVans";
import HostReviews from "./pages/Host/HostReviews/HostReviews";
import HostIncomes from "./pages/Host/HostIncomes/HostIncomes";
import HostVanDetail from "./pages/Host/HostVans/HostVanDetail/HostVanDetail";
import HostVanLayout from "./components/HostVanLayout/HostVanLayout";
import HostVanPricing from "./pages/Host/HostVans/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVans/HostVanPhotos/HostVanPhotos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="host" element={<Host />}>
                        <Route index element={<HostDashboard />} />
                        <Route path="vans">
                            <Route index element={<HostVans />} />
                            <Route element={<HostVanLayout />}>
                                <Route path=":id" element={<HostVanDetail />} />
                                <Route path=":id/pricing" element={<HostVanPricing />} />
                                <Route path=":id/photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                        <Route path="income" element={<HostIncomes />} />
                        <Route path="reviews" element={<HostReviews />} />
                    </Route>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
