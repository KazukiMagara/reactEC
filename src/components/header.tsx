import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
    align-content: center;
    display: flex;
    height: 2rem;
    justify-content: space-between;
    line-height: 2rem;
    padding: 0.5rem 1rem;
    background-size: cover;
    background-color: lightgreen;
    background-position: center;
`

const HeaderTitle = styled.div`
    font-size: 1.5rem;
`

const HeaderControl = styled.div`
    align-content: center;
    display: flex;
    height: 2rem;
    justify-content: center;

    & > * {
        margin-left: 0.5rem;
    }
`

interface Props {
    title: string
}

export const Header: React.FC<Props> = (props) => (
    <HeaderWrapper>
        <HeaderTitle>
            {props.title}
        </HeaderTitle>
        <HeaderControl>
            <Link to="/itemList">
                商品一覧
            </Link>
            <Link to="/cart">
                カート
            </Link>
        </HeaderControl>
    </HeaderWrapper>
)