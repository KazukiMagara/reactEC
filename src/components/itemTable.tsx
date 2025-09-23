import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button'

const ITable = styled.table`
    margin: 0 auto;
    width: 60%;
    border: 1px solid;
    border-collapse: collapse;
`

const Ith = styled.th`
    border: 1px solid;
    border-collapse: collapse;
    background-color: green;
`

const Itd = styled.td`
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
    addCart: (itemId: number) => void;
}

export const ItemTable:  React.FC<Props> = (props) => {
    const addCart: (itemId:number) => void = (itemId) => {
        // props.addCart(itemId);
        console.log("added to Cart : " + itemId);
    }

    return (
        <>
            <ITable>
                <thead>
                    <tr>
                        <Ith>商品ID</Ith>
                        <Ith>素材</Ith>
                        <Ith>高さ(cm)</Ith>
                        <Ith>幅(cm)</Ith>
                        <Ith>長さ(cm)</Ith>
                        <Ith>重さ(kg)</Ith>
                        <Ith>価格(円)</Ith>
                        <Ith>在庫(個)</Ith>
                        <Ith>カート追加</Ith>
                    </tr>
                </thead>
                <tbody>
                    {props.itemList.map(item => (
                        <tr key={item.id}>
                            <Itd>{item.id}</Itd>
                            <Itd>{item.material}</Itd>
                            <Itd>{item.sizeHeight}</Itd>
                            <Itd>{item.sizeWidth}</Itd>
                            <Itd>{item.sizeLength}</Itd>
                            <Itd>{item.weight}</Itd>
                            <Itd>{item.price}</Itd>
                            <Itd>{item.itemInv}</Itd>
                            <Itd>
                                <Button onClick={() => props.addCart(item.id)}>追加</Button>
                            </Itd>
                        </tr>
                    ))}
                </tbody>
            </ITable>
        </>
    )
}