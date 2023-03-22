import styled from "styled-components";
import minus from "/public/assets/icon-plus.svg"
import plus from "/public/assets/icon-minus.svg"
import reply from "/public/assets/icon-reply.svg"
import Data from "../../data.json"
import { useDispatch, useSelector } from "react-redux";
import { updateFunction, updatePersonName, textUpdate } from "../store/handleChange";

function Comment() {
  const dispatch = useDispatch();
  const deleteP = useSelector((del: any) => del.name.delete)
  const screenWidth = window.innerWidth;

  return (
    <div>
      <div>{Data.comments.map((items: any, index: any) => {
        function changeValue() {
          if (deleteP === false) {
            dispatch(updateFunction(true)),
              dispatch(textUpdate("")),
              dispatch(updatePersonName(items.user.username))
          }
        }
        return (
          <CommentSectionWrapper key={index}>
            <NameImgWrapper>
              <img style={{ width: "32px", height: "32px" }} src={items.user.image.png} alt="girl avatar" />
              <Name>{items.user.username}</Name>
              <CommentedDuration>{items.createdAt}</CommentedDuration>
            </NameImgWrapper>
            <Text>{items.content}</Text>
            <CounterReplayWrapper style={{width: "100%"}}>
              <Counter>
                <img src={plus} alt="plus icon" />
                <Number>{items.score}</Number>
                <img src={minus} alt="minus icon" />
              </Counter>
              <ReplayWrapper onClick={changeValue}>
                <ReplayImage src={reply} alt="replay icon" />
                <Replay >Replay</Replay>
              </ReplayWrapper>
            </CounterReplayWrapper>
          </CommentSectionWrapper>
        )
      })}
      </div>
    </div>
  )
}

const ReplayImage = styled.img`
  width: 14px;
  height: 12.25px;
`

const ReplayWrapper = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  width: 90px;
  align-items: center;
  justify-content: space-between;
`

const Replay = styled.span`
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
  width: 311px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.p`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
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
  width: 343px;
  height: 256px;
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    width: 730px;
    height: 200px;
    margin-top: 16px;
    border-radius: 8px;
    padding: 24px;
    justify-content: space-between;
  }
`

export default Comment;