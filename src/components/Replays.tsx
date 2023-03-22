import styled from "styled-components";
import minus from "/public/assets/icon-plus.svg";
import plus from "/public/assets/icon-minus.svg";
import reply from "/public/assets/icon-reply.svg";
import Data from "../../data.json";
import { useSelector } from "react-redux";
import PushedReplay from "./PushedReplay";
import { updateFunction, updatePersonName, textUpdate } from "../store/handleChange";
import { useDispatch } from "react-redux";

function Replays() {
  const text = useSelector((store: any) => store.name.text)
  const deleteP = useSelector((del: any) => del.name.delete)

  const dispatch = useDispatch();
  function changeValue() {
    if (deleteP === false) {
      dispatch(updateFunction(true)),
      dispatch(textUpdate("")),
      dispatch(updatePersonName(Data.comments[1].replies[0].user.username))
    }
  }

  return (
    <MainWrapper>
      <LineDiv></LineDiv>
      <div>
        <CommentSectionWrapper>
          <NameImgWrapper>
            <img style={{ width: "32px", height: "32px" }} src={Data.comments[1].replies[0].user.image.png} alt="girl avatar" />
            <Name>{Data.comments[1].replies[0].user.username}</Name>
            <CommentedDuration>{Data.comments[1].replies[0].createdAt}</CommentedDuration>
          </NameImgWrapper>
          <Text><ReplayPerson>@{Data.comments[1].replies[0].replyingTo}</ReplayPerson> {Data.comments[1].replies[0].content}</Text>
          <CounterReplayWrapper>
            <Counter>
              <img src={plus} alt="plus icon" />
              <Number>{Data.comments[1].replies[0].score}</Number>
              <img src={minus} alt="minus icon" />
            </Counter>
            <ReplayWrapper onClick={changeValue} >
              <ReplayImage src={reply} alt="replay icon" />
              <Replay>Replay</Replay>
            </ReplayWrapper>
          </CounterReplayWrapper>
        </CommentSectionWrapper>
        {text && <PushedReplay></PushedReplay>}
      </div>
    </MainWrapper>
  )
}
const ReplayPerson = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(83, 87, 182, 1);   
`

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
  width: 293px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 100%;
  }
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

const LineDiv = styled.div`
  width: 2px;
  height: 100%;
  background-color: rgba(233, 235, 240, 1);
`

const MainWrapper = styled.div`
  width: 343px;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 685px;
  }
`

export default Replays;