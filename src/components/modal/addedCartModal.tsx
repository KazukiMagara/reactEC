import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../button'

const Wrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Modal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 32rem;
`

const Control = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

interface Props {
  continueShopping: () => void
  toCart: () => void
}

export const AddedCartModal: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <Modal>
        <p>商品をカートに追加しました。</p>
        <p>買い物を続けますか？</p>
        <Control>
          <Button onClick={() => props.continueShopping()}>
            買い物を続ける
          </Button>
          <Button onClick={() => props.toCart()} cancel>
            カートを見る
          </Button>
        </Control>
      </Modal>
    </Wrapper>
  )
}