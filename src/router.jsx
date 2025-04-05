import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PromoPage from './components/Teens/PromoPage'
import Catalog from "./components/Catalog/Catalog";
import Products from "./components/newProducts/Products";
import Stocks from "./components/Stocks/Stocks";
import Shops from "./components/Shops/Shops";
import Teens from "./components/Teens/Teens";
import Tamagochi from "./components/Tamagochi/Tamagochi";
import GiftCard from "./components/GiftCards/GiftCard";
import Discount from "./components/discounts/Discount";
import Heart from "./components/heart/Heart";
import Person from "./components/person/Person";
import Basket from "./components/basket/Basket";
import ContestApp from "./components/Stocks/ContestApp";
import StokssA from "./components/Stocks/StokssA";
import Acaunt from "./components/person/Acaunt";
import Footerrs from "./components/Footer/Footerrs";
import FFoter from "./components/Footer/FFoter";
import Footerr from "./components/Footer/Footerr";
import Foooters from "./components/Footer/Foooters";
import Fotter from "./components/Footer/Fotter";
import FoTerss from "./components/Footer/FoTerss";
import ScrollToTop from "./ScrollToTop";



export const myRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'catalog',
                element: <Catalog/>
            },
            {
                path: 'newProducts',
                element: <Products/>
            },
            {
                path: 'stocks',
                element: <Stocks/>
            },
            {
                path: 'shops',
                element: <Shops/>
            },
            {
                path: 'teens',
                element: <Teens/>
            },
            {
                path: 'tamagochi',
                element: <Tamagochi/>
            },
            {
                path: 'giftCards',
                element: <GiftCard/>
            },
            {
                path: 'discounts',
                element: <Discount/>
            },
            {
                path: 'favorites',
                element: <Heart/>
            },
            {
                path: 'profile',
                element: <Person/>
            },
            {
                path: 'cart',
                element: <Basket/>
            },
            {
                path: '/ContestApp',
                element: <ContestApp/>
            },
            {
                path: '/PromoPage',
                element: <PromoPage/>
            },
            {
                path: '/stocks2',
                element: <StokssA/>
            },
            {
                path: '/Acaunt',
                element: <Acaunt/>
            },
            {
                path: 'footers2',
                element: <Footerrs/>
            },
            {
                path: 'footers3',
                element: <FFoter/>
            },
            {
                path: 'footers4',
                element: <Footerr/>
            },
            {
                path: 'footers5',
                element: <Foooters/>
            },
            {
                path: 'footers6',
                element: <Fotter/>
            },
            {
                path: 'footers7',
                element: <FoTerss/>
            },
            {
                path: 'ScrollToTop',
                element: <ScrollToTop/>
            },
        ]
    }
])