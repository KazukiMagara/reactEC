import * as React from 'react'
import styled from 'styled-components'

const CartAddButton = styled.button`
    border: none;
    background-color: lightgreen;
`

interface Props {
    onClick: () => void
}

export const AddButton: React.FC<Props> = (props) => {
    return (
        <>
            <CartAddButton onClick={props.onClick}>追加する</CartAddButton>
        </>
    )
} 