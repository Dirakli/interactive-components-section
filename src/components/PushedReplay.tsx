import styled from "styled-components"
import Data from "../../data.json";
import edit from "/public/assets/icon-edit.svg";
import Delete from "/public/assets/icon-delete.svg";
import minus from "/public/assets/icon-plus.svg";
import plus from "/public/assets/icon-minus.svg";
import { useDispatch } from "react-redux";
import { textUpdate, newTextFunction, deleteFunc } from "../store/handleChange";
import { useSelector } from "react-redux";

function PushedReplay() {
  const dispatch = useDispatch();
  const text = useSelector((store: any) => store.name.text)
  const personName = useSelector((idNumber: any) => idNumber.name.personName)
  const deleteP = useSelector((del: any) => del.name.delete)


  function deleteFunction() {
    dispatch(deleteFunc(true))
  }

  function EditTextfoo() {
    if (deleteP == false) {
      dispatch(newTextFunction(text)),
        dispatch(textUpdate(""))
    }

  }

  return (
    <CommentSectionWrapper style={{ marginTop: "16px", justifyContent: "space-between", paddingTop: "16px" }} >
      <NameImgWrapper>
        <img style={{ width: "32px", height: "32px" }} src={Data.comments[1].replies[1].user.image.png} alt="girl avatar" />
        <Name>{Data.comments[1].replies[1].user.username}</Name>
        <CommentedDuration>{Data.comments[1].replies[1].createdAt}</CommentedDuration>
      </NameImgWrapper>
      <TextAdded ><ReplayPerson>@{personName}</ReplayPerson> {text}</TextAdded>
      <CounterReplayWrapper>
        <Counter>
          <img src={plus} alt="plus icon" />
          <Number>{Data.comments[1].replies[1].score}</Number>
          <img src={minus} alt="minus icon" />
        </Counter>
        <EditWrapper >
          <EditImage src={Delete} alt="edition icon" />
          <Edit onClick={deleteFunction} style={{ color: "rgba(237, 99, 104, 1)" }} >Delete</Edit>
          <EditImage src={edit} alt="edition icon" />
          <Edit onClick={EditTextfoo} >Edit</Edit>
        </EditWrapper>
      </CounterReplayWrapper>
    </CommentSectionWrapper>
  )
}

const EditWrapper = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  width: 153px;
  align-items: center;
  justify-content: space-between;
`

const ReplayPerson = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(83, 87, 182, 1);   
`

const EditImage = styled.img`
  width: 14px;
  height: 14px;
`


const Edit = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(83, 87, 182, 1);   
`

const Number = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.96px;
  color: rgba(83, 87, 182, 1); 
`

const Counter = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(245, 246, 250, 1);
`

const CounterReplayWrapper = styled.div`
  width: 293px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 100%
  }
`

const TextAdded = styled.p<any>`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  width: 530px;
  word-wrap: break-word;
  font-weight: 400;
  line-height: 24px;
  color: rgba(103, 114, 126, 1);      
`

const CommentedDuration = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(103, 114, 126, 1);  
`

const Name = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.96px;
  color: rgba(51, 66, 83, 1);
`

const NameImgWrapper = styled.div`
  width: 243px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CommentSectionWrapper = styled.div`
  width: 325px;
  min-height: 280px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    width: 642px;
    min-height: 200px;
    justify-content: space-between;
    padding-top: 16px;
  }
`

export default PushedReplay;