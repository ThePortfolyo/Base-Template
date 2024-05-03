import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path={`/product/view/details/:_id`} element={<ProductDetails />}></Route> */}
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

// export { AppRoutes };
