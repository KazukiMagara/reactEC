import * as React from 'react'
import styled from 'styled-components'
import { CartTable } from '../components/cartTable';
import { Button } from '../components/button';

const CartArea = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
`

const CompleteButtonArea = styled.div`
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

interface Props {
    itemList: Item[];
    cartList: number[];
    delete: (itemId: number) => void;
    complete: () => void;
}

export const Cart : React.FC<Props> = (props) => {
    return (
        <>
            <CartArea>
                <CartTable itemList={props.itemList} cartList={props.cartList} delete={props.delete} />
            </CartArea>
            {/* <CompleteButtonArea>
                <Button onClick={() => props.complete}>購入する</Button>
            </CompleteButtonArea> */}
        </>
    )
}