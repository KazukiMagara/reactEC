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

interface CartItem {
    itemId: number;
    price: number;
    itemCnt: number;
}

const itemList : Item[] = [
    {id: 1, material: "鉄", sizeHeight: 20, sizeWidth: 20, sizeLength: 20, weight: 20, price: 3000, itemInv: 30},
    {id: 2, material: "木材", sizeHeight: 1, sizeWidth: 20, sizeLength: 200, weight: 20, price: 2000, itemInv: 30},
    {id: 3, material: "銅", sizeHeight: 0.1, sizeWidth: 30, sizeLength: 300, weight: 20, price: 4000, itemInv: 30}
];

export const App: React.FC = () => {
    const [cartList, setCartList] = useState<CartItem[]>([]);

    const addCart = (itemId: number) => {
        setCartList(prevItems => {
            const isDuplicate = prevItems.some(item => item.itemId === itemId);
            if(isDuplicate) {
                return prevItems;
            }
            const searchItem = itemList.find(item => item.id === itemId);
            const newItem: CartItem = {
                itemId: itemId,
                price: searchItem.price,
                itemCnt: 1,
            };
            return [...prevItems, newItem];
        });
    }

    const deleteCart = (targetId: number) => {
        setCartList(prevItems => prevItems.filter(item => item.itemId !== targetId));
    }

    const updateItemCount = (itemId: number, newCount: number) => {
        setCartList(prev =>
            prev.map(item =>
                item.itemId === itemId ? {...item, itemCnt: newCount } : item
            )
        );
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
                    <Cart itemList={itemList} cartList={cartList} delete={deleteCart} updateItemCnt={updateItemCount} complete={complete}/>
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