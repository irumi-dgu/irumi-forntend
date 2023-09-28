import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { API } from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import saveAs from "file-saver";

function MyDetail() {
  const [lanternDetail, setLanternDetail] = useState([]);
  const { detailId } = useParams();
  const navigate = useNavigate();

  const fetchLanternDetailData = async () => {
    try {
      const response = await API.get(`/api/lanterns/${detailId}`);
      setLanternDetail(response.data);
      console.log(response.data);
      console.log(lanternDetail);
    } catch (error) {
      console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };

  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

  console.log(lanternDetail);

  const data = [
    {
      id: 3,
      nickname: "20 김강민",
      content: "내 연등 예시",
      lanternColor: 1,
      light_bool: true
    }
  ];

  // 이미지 저장
  const LanternRef = useRef();

  const handleDownload = async () => {
    if (!LanternRef.current) return;

    try {
      const div = LanternRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob(blob => {
        if (blob !== null) {
          saveAs(blob, "당신의_연등.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  // //   링크복사
  // const handleCopyLink = () => {
  //   // 배포 링크 보고 수정 필요
  //   // navigator.clipboard.writeText(`http://iirumi/irumi/${detailId}.com`);
  //   navigator.clipboard.writeText(window.location.href);
  //   // navigator.clipboard.writeText("http://iirumi.com");
  //   alert("현재 페이지의 링크가 복사되었습니다.");
  // };

  const handleCopyLink = () => {
    const link = `http://iirumi.com/irumi/${detailId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log(`링크 복사됨: ${link}`);
        alert("링크가 복사되었습니다.");
      })
      .catch(error => {
        console.error("링크 복사 중에 오류 생김:", error);
        alert("앗, 링크 복사 중에 오류가 생겼어요.");
      });
  };

  return (
    <S.MainWrapper>
      <S.IrumiViewWrapper ref={LanternRef}>
        {[lanternDetail].map(item => (
          <S.DetailLanternWrapper key={item.id}>
            <S.DetailLanternImg
              src={`/detail_${item.lanternColor}_${item.light_bool}.png`}
            />
            <S.TitleSec>{item.nickname}</S.TitleSec>
            <S.ContentSec>{item.content}</S.ContentSec>
          </S.DetailLanternWrapper>
        ))}
      </S.IrumiViewWrapper>

      <S.MyBtnsBox>
        <S.MyBtn>
          <img src="/my_saveImg.png" onClick={handleDownload} />
          <p>이미지로 저장</p>
        </S.MyBtn>
        <S.MyBtn>
          <img src="/my_goMain.png" onClick={() => navigate("/")} />
          <p>메인페이지</p>
        </S.MyBtn>
        <S.MyBtn>
          <img src="/my_copyUrl.png" onClick={() => handleCopyLink()} />
          <p>이루미 링크복사</p>
        </S.MyBtn>
      </S.MyBtnsBox>
    </S.MainWrapper>
  );
}

export default MyDetail;
