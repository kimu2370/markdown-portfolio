import React from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
const soruce = `
RESUME
======

자기소개
-------
프론트엔드 개발자 김승현입니다.

정보통신 공학을 전공했으며 나만의 특별한 웹사이트를 제작하여 타인에게 선한 영향을 주고자 개발을 시작하게 되었습니다. 

세 달이라는 짧은 기간 동안 두 번의 팀 프로젝트와 한 달의 기업 협업 프로젝트를 진행하였으며, 주체적으로 학습하고 

스터디 모임을 운영하며 팀원들과 함께 새로운 기술을 익히고 적용할 수 있었습니다. 무엇보다 개발자로서의 올바른 태도와 소통 방식을 갖추는 시간이었습니다.
 
꾸준히 성장하는 개발자, 익숙함보다는 새로운 경험과 도전을 선호하는 개발자가 되고자 합니다.

____

#### [이력서 Web](https://www.canva.com/design/DAD2luAW4nY/Xn3B9pqnL9zsA0fRfOHjJg/view)
#### [GitHub](https://github.com/kimu2370)

`;

const Main = () => {
  return (
    <GlobalStyles>
      <Box>
        <Markdown source={soruce} />
      </Box>
    </GlobalStyles>
  );
};

export default Main;

const GlobalStyles = styled.div`
  margin: 0 auto;
  font-family: "Arial";
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  h1 {
    font-size: 50px;
    color: #4293f5;
  }

  h4 {
    display: flex;
    font-size: 40px;
  }

  a {
    text-decoration: none;
    color: pink;
  }
  a:hover {
    opacity: 0.6;
  }
`;
