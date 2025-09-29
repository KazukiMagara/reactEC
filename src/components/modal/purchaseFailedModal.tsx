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
  onCancel: () => void
}

export const PurchaseFailedModal: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <Modal>
        <p>商品の購入に失敗しました。</p>
        <p>カート内の商品を再確認してください。</p>
        <Control>
          <Button onClick={() => props.onCancel()} cancel>
            カートを再確認する
          </Button>
        </Control>
      </Modal>
    </Wrapper>
  )
}