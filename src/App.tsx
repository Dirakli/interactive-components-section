import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import Comment from "./components/Comment"
import Replays from "./components/Replays"
import Forms from "./components/Forms"
import { updateFunction } from "./store/handleChange"
import { useDispatch, useSelector } from "react-redux";
import { textUpdate, newTextFunction, deleteFunc, updatePersonName } from "./store/handleChange";

function App() {
  const dispatch = useDispatch();
  const deleteP = useSelector((del: any) => del.name.delete)

  function deleteSubmit() {
    return (
      dispatch(textUpdate("")),
      dispatch(newTextFunction("")),
      dispatch(updatePersonName("")),
      dispatch(deleteFunc(false))
    )
  }

  function deleteCancel() {
    return (
      dispatch(deleteFunc(false))
    )
  }


  function onblur() {
    return dispatch(updateFunction(false))
  }
  return (
    <WholeScreen style={{opacity: deleteP ? "0.5" : "1"}} onBlur={onblur} >
      <GlobalStyles />
      <WrapperForAutoHeight>
        <MainWrapper>
          <Comment />
          <Replays />
          <Forms />
        </MainWrapper>
      </WrapperForAutoHeight>
      {deleteP ? <DeleteAlert>
        <DeleteHeading>Delete comment</DeleteHeading>
        <DeleteText>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</DeleteText>
        <ButtonsWrapper>
          <DelButton onClick={deleteCancel} >NO, CANCEL</DelButton>
          <DelButton style={{backgroundColor: "rgba(237, 99, 104, 1)"}} onClick={deleteSubmit} >YES, DELETE</DelButton>
        </ButtonsWrapper>
      </DeleteAlert> : ""}
    </WholeScreen>

  )
}

const DelButton = styled.button`
  font-size: 20px;
  border: none;
  width: 138px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(103, 114, 126, 1);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
  line-height: 23.7px;
  align-items: Center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    width: 161px;
  }
`

const ButtonsWrapper = styled.div`
  width: 288px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 336px;
  }
`

const DeleteText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
  line-height: 24px;
  color: rgba(103, 114, 126, 1);
`

const DeleteHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  line-height: 23.7px;
  color: rgba(51, 66, 83, 1);
`

const DeleteAlert = styled.div`
  width: 343px;
  height: 224px;
  display: flex;
  padding-left: 28px;
  padding-right: 28px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  margin-top: 550px;
  margin-left: auto;
  border-radius: 8px;
  background-color: white;

  @media (min-width: 1200px) {
    width: 400px;
    height: 252px;
  }
`

const MainWrapper = styled.div`
  width: 375px;
  margin-top: 16px;
  height: 1413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 246, 250, 1);

  @media (min-width: 1200px) {
    width: 730px;
    margin-top: 64px;
    height: 896px;
    align-items: flex-end;
  }
`

const WrapperForAutoHeight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

const WholeScreen = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}

button {
  cursor: pointer;
}
`

export default App
