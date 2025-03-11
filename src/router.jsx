import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
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
        ]
    }
])