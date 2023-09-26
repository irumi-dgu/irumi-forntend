import React from "react";
import * as S from "./style";

function AboutUs() {
  return (
    <S.aboutWrapper>
      <S.aboutBg img src="/about_bgimg.png" />
      <S.aboutIntro>
        {" "}
        이루미는 멋쟁이사자처럼 심바톤에서 시작된 아이디어로, <br />
        동국대학교의 상징적 행사인 연등제를 온라인으로 전개한 서비스입니다.
        <br /> <br />
        동국대학교 학생이라면 낭만과 설렘이 가득한 봄에 <br />
        팔정도에서 소원 등표를 달아 본 경험이 있을 것입니다. <br /> <br />
        저희는 연등을 매개체로 그날의 분위기를 다시 느끼고, <br />
        그 시절 내가 이루고자 했던 소원을 간직할 수 있는 <br />
        경험을 제공하고자 합니다.
      </S.aboutIntro>
    </S.aboutWrapper>
  );
}

export default AboutUs;
