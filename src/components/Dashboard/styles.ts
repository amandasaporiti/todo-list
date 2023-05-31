import styled from 'styled-components'

import { BsCircle, BsCheckCircleFill } from 'react-icons/bs'

export const CheckIcon = styled(BsCheckCircleFill)`
  width: 20px;
  height: 20px;
  color: #8284fa;
  flex-shrink: 0;
  fill: #8284fa;
`
export const NotCheckdIcon = styled(BsCircle)`
  width: 20px;
  height: 20px;
  color: #8284fa;
  flex-shrink: 0;
`

export const DashboardContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`

export const Header = styled.div`
  width: 100%;
  background: #0d0d0d;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tasks = styled.div`
  margin: 0 auto;
  max-width: 736px;
`

export const AddNewTask = styled.div`
  max-width: 736px;
  display: flex;
  align-items: center;
  margin-top: -25px;

  input {
    flex: 1;
    padding: 16px;
    background: #262626;
    border: 1px solid #0d0d0d;
    border-radius: 8px;
    outline: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #fff;

    &:placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #808080;
    }
  }

  button {
    padding: 16px;
    background: #1e6f9f;
    font-weight: 700;
    font-size: 14px;
    color: #f2f2f2;
    border: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: 8px;

    img {
      width: 15.97px;
      height: 15.97px;
      margin-left: 5px;
    }
  }
`

export const TasksData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 63px;

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #4ea8de;

    span {
      padding: 1px 8px;
      background: #333333;
      border-radius: 999px;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      margin-left: 4px;
    }
  }

  .done-text {
    color: #8284fa;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 200px 0;

  div {
    display: flex;
    justify-content: space-between;
    background: #262626;
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 20px;

    & + div {
      margin-top: 12px;
    }

    p {
      padding: 0 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #f2f2f2;
    }
  }
`

export const Trash = styled.button`
  background: transparent;
  border: 0;

  img {
    height: 18px;
    width: 18px;
    cursor: pointer;
  }
`

interface ButtonProps {
  hasCompleted?: any
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 0;
`

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 736px;
  margin-top: 25px;
  border-top: 1px solid #333333;
  border-radius: 8px;

  div {
    img {
      width: 56px;
      height: 56px;
      display: flex;
      margin: 0 auto;
      margin-top: 64px;
    }

    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: #808080;
      margin-top: 16px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: #808080;
      margin-top: 3px;
    }
  }
`
