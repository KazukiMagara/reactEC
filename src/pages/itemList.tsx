import * as React from 'react'
import styled from 'styled-components'
import { Header } from '../components/header'
import { ItemTable } from '../components/itemTable'

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
`

const ItemArea = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
`

export const ItemList:  React.FC = () => {
    return (
        <>
            <HeaderArea>
                <Header title="ReactEC">
                    <></>
                </Header>
            </HeaderArea>
            <ItemArea>
                <ItemTable />
            </ItemArea>
        </>
    )
}
