import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { API } from "../../api/axios";
import { useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import saveAs from "file-saver";

function MyDetail() {
  const [lanternDetail, setLanternDetail] = useState([]);
  const { detailId } = useParams();

  // const fetchLanternDetailData = async () => {
  //   try {
  //     const response = await API.get(`/api/lanterns/${detailId}`);
  //     setLanternDetail(response.data.results);
  //   } catch (error) {
  //     console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchLanternDetailData();
  // }, [detailId]);

  const data = [
    {
      id: 3,
      nickname: "20 김강민",
      content:
        "내 연등 예시",
      lantern_color: 1,
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
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <>
      <S.IrumiViewWrapper ref={LanternRef}>
        {data.map(item => (
          <S.DetailLanternWrapper key={item.id}>
            <S.DetailLanternImg
              src={`/detail_${item.lantern_color}_${item.light_bool}.png`}
            />
            <S.TitleSec>{item.nickname}</S.TitleSec>
            <S.ContentSec>{item.content}</S.ContentSec>
          </S.DetailLanternWrapper>
        ))}
        <S.MyBtnsBoxPosition />
      </S.IrumiViewWrapper>
      <S.MyBtnsBox>
        <S.MyBtn>
          <img
            src="/my_saveImg.png"
            onClick={handleDownload}
          />
          <p>이미지로 저장</p>
        </S.MyBtn>
        <S.MyBtn>
          <img src="/my_goMain.png" />
          <p>메인페이지</p>
        </S.MyBtn>
        <S.MyBtn>
          <img src="/my_copyUrl.png" />
          <p>이루미 링크복사</p>
        </S.MyBtn>
      </S.MyBtnsBox>
    </>
  );
}

export default MyDetail;
