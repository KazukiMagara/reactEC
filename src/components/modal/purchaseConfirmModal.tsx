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
  completePurchase: () => void
  onCancel: () => void
}

export const PurchaseConfirmModal: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <Modal>
        <p>商品を購入します。</p>
        <p>よろしいですか？</p>
        <Control>
          <Button onClick={() => props.completePurchase()}>
            購入する
          </Button>
          <Button onClick={() => props.onCancel()} cancel>
            戻る
          </Button>
        </Control>
      </Modal>
    </Wrapper>
  )
}