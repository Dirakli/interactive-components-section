import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import styled from "styled-components";
import Data from "../../data.json"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateFunction, textUpdate } from "../store/handleChange";

type FormValues = {
  info: string;
}

function Forms() {
  const { register, handleSubmit, reset, setFocus } = useForm<FormValues>();
  const dispatch = useDispatch();
  const newText = useSelector((store: any) => store.name.newText)
  const value = useSelector((store: any) => store.name.value)
  const personName = useSelector((name: any) => name.name.personName)
  const deleteP = useSelector((del: any) => del.name.delete)

  function foo() {
    if (deleteP == false) {
      if (personName !== "") {
        dispatch(updateFunction(true))
      }
    }

  }

  function onSubmit(data: FormValues) {
    if (deleteP == false) {
      if (personName !== "") {
        dispatch(textUpdate(data.info))
        reset();
      }
    }
  }

  useEffect(() => {
    if (value) {
      return setFocus("info")
    }
  }, [value])

  return (
    <MainWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input disabled={deleteP} defaultValue={newText} {...register("info")} placeholder="Add a comment…" rows={4} cols={40} />
      <ImgButtonWrapper>
        <Img src={Data.currentUser.image.png} alt="user image" />
        <Button type="submit" onClick={foo} >send</Button>
      </ImgButtonWrapper>
    </MainWrapper>
  )
}

const Button = styled.button`
  width: 104px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(83, 87, 182, 1);
  outline: none;
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`

const Img = styled.img`
  width: 32px;
  height: 32px;
`

const ImgButtonWrapper = styled.div`
  width: 311px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 650px;
    margin-top: 16px;
  }
`

const Input = styled.textarea`
  width: 311px;
  height: 96px;
  border-radius: 8px;
  border: 1px solid #E9EBF0;
  padding-bottom: 55px;
  padding-left: 24px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #67727E;
  outline: none;
  
  @media (min-width: 1200px) {
    width: 650px;
    height: 80px;
  }
`

const MainWrapper = styled.form`
  width: 343px;
  height: 189px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 13px;
  background-color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    width: 730px;
    height: 144px;
  }
`

export default Forms;