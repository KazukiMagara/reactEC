import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Button } from './button'

const CTable = styled.table`
    margin: 0 auto;
    width: 60%;
    border: 1px solid;
    border-collapse: collapse;
`

const Cth = styled.th`
    border: 1px solid;
    border-collapse: collapse;
    background-color: green;
`

const Ctd = styled.td`
    border: 1px solid;
    border-collapse: collapse;
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

interface Props {
    itemList: Item[];
    cartList: number[];
    delete: (itemId: number) => void;
}

export const CartTable: React.FC<Props> = (props) => {
    const cartItems = props.itemList.filter(item => props.cartList.includes(item.id));
    
    const removeFromCart = (itemId: number) => {
        // setCartList(prev => prev.filter(id => id !== itemId));
        // props.cartList.push(itemId);
        props.delete(itemId);
        console.log("delete:" + itemId);
    };

    return (
        <>
            <CTable>
                <thead>
                    <tr>
                        <Cth>商品ID</Cth>
                        <Cth>素材</Cth>
                        <Cth>高さ(cm)</Cth>
                        <Cth>幅(cm)</Cth>
                        <Cth>長さ(cm)</Cth>
                        <Cth>重さ(kg)</Cth>
                        <Cth>価格(円)</Cth>
                        <Cth>在庫(個)</Cth>
                        <Cth>購入数</Cth>
                        <Cth>削除</Cth>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <Ctd>{item.id}</Ctd>
                            <Ctd>{item.material}</Ctd>
                            <Ctd>{item.sizeHeight}</Ctd>
                            <Ctd>{item.sizeWidth}</Ctd>
                            <Ctd>{item.sizeLength}</Ctd>
                            <Ctd>{item.weight}</Ctd>
                            <Ctd>{item.price}</Ctd>
                            <Ctd>{item.itemInv}</Ctd>
                            <Ctd>
                                <input type="number" />
                            </Ctd>
                            <Ctd>
                                <Button onClick={() => removeFromCart(item.id)} >削除</Button>
                            </Ctd>
                        </tr>
                    ))}
                </tbody>
            </CTable>
        </>
    )
}