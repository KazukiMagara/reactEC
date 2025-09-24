import * as React from 'react'
import styled from 'styled-components'
import { CartTable } from '../components/cartTable';
import { Button } from '../components/button';
import { useHistory } from 'react-router-dom';

const CartArea = styled.div`
    padding: 2rem;
    text-align: center;
`

const CompleteButtonArea = styled.div`
    bottom: 0;
    left: 0;
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
    const history = useHistory();

    const handleComplete = () => {
        props.complete(); // カートを空にする（親から渡された関数）
        history.push("/complete");
    };

    return (
        <>
            <CartArea>
                <CartTable itemList={props.itemList} cartList={props.cartList} delete={props.delete} />
                <CompleteButtonArea>
                    <Button onClick={() => handleComplete()}>購入する</Button>
                </CompleteButtonArea>
            </CartArea>
        </>
    )
}