import * as React from 'react'
import styled from 'styled-components'

const CartDeleteButton = styled.button`
    border: none;
    background-color: lightgreen;
`

interface Props {
    onClick: () => void
}

export const DeleteButton: React.FC<Props> = (props) => {
    return (
        <>
            <CartDeleteButton onClick={props.onClick}>削除する</CartDeleteButton>
        </>
    )
} 