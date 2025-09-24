import * as React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { Header } from '../components/header'
import { ItemList } from './itemList'
import { Cart } from './cart'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
`
interface Item {
    id: number;
    material: string;
    sizeHeight: number;
    sizeWidth: number;
    sizeLength: number;
    weight: number;
    price: number;
    itemInv: number;
}

const itemList : Item[] = [
    {id: 1, material: "鉄", sizeHeight: 20, sizeWidth: 20, sizeLength: 20, weight: 20, price: 3000, itemInv: 30},
    {id: 2, material: "木材", sizeHeight: 1, sizeWidth: 20, sizeLength: 200, weight: 20, price: 2000, itemInv: 30},
    {id: 3, material: "銅", sizeHeight: 0.1, sizeWidth: 30, sizeLength: 300, weight: 20, price: 4000, itemInv: 30}
];

export const App: React.FC = () => {
    const [cartList, setCartList] = useState<number[]>([]);

    const addCart = (itemId: number) => {
        if (!cartList.includes(itemId)) {
            setCartList(prev => [...prev, itemId]);
        }
    }

    const deleteCart = (itemId: number) => {
        setCartList(prev => prev.filter(id => id !== itemId));
    }

    const complete = () => {
        setCartList([]);
    }

    return (
        <>
            <Router>
                <HeaderArea>
                    <Header title="ReactEC" />
                </HeaderArea>
                <Route exact path="/itemList">
                    <ItemList itemList={itemList} cartList={cartList} addCart={addCart} />
                </Route>
                <Route exact path="/cart">
                    <Cart itemList={itemList} cartList={cartList} delete={deleteCart} complete={complete}/>
                </Route>
                <Route exact path="/complete">
                    <div style={{ padding: '2rem' }}>
                        <h2>ご購入ありがとうございました！</h2>
                        <p>注文が正常に完了しました。</p>
                    </div>
                </Route>
                <Redirect to="/itemList" path="*" />
            </Router>
        </>
    )
} 