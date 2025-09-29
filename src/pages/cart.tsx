import * as React from 'react'
import styled from 'styled-components'
import { CartTable } from '../components/cartTable';
import { Button } from '../components/button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { PurchaseConfirmModal } from '../components/modal/purchaseConfirmModal';

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

interface CartItem {
    itemId: number;
    price: number;
    itemCnt: number;
}

interface Props {
    itemList: Item[];
    cartList: CartItem[];
    delete: (itemId: number) => void;
    updateItemCnt: (itemId: number, newCount: number) => void
    complete: () => void;
}

export const Cart : React.FC<Props> = (props) => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const handleComplete = () => {
        props.complete(); // カートを空にする（親から渡された関数）
        history.push("/complete");
    };

    return (
        <>
            <CartArea>
                <CartTable itemList={props.itemList} cartList={props.cartList} updateItemCnt={props.updateItemCnt} delete={props.delete} />
                <CompleteButtonArea>
                    <Button onClick={() => setShowModal(true)}>購入する</Button>
                </CompleteButtonArea>
            </CartArea>
            {showModal && (
                <PurchaseConfirmModal
                    completePurchase={() => handleComplete()}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    )
}