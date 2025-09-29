import * as React from 'react'
import styled from 'styled-components'
import { ItemTable } from '../components/itemTable'

const ItemArea = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
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

interface Props {
    itemList: Item[];
    cartList: CartItem[];
    addCart: (itemId: number) => void;
}

export const ItemList:  React.FC<Props> = (props) => {
    return (
        <>
            <ItemArea>
                <ItemTable itemList={props.itemList} cartList={props.cartList} addCart={props.addCart} />
            </ItemArea>
        </>
    )
}
