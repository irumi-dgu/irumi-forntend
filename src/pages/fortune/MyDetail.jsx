import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { API } from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import saveAs from "file-saver";

function MyDetail() {
  const LinkRef = useRef();
  const [lanternDetail, setLanternDetail] = useState([]);
  const { detailId } = useParams();
  const navigate = useNavigate();

  const fetchLanternDetailData = async () => {
    try {
      const response = await API.get(`/api/lanterns/${detailId}`, {
        withCredentials: true
      });
      setLanternDetail(response.data);
    } catch (error) {
      // console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };

  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

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
      // console.error("Error converting div to image:", error);
    }

    // 이미지 저장 이벤트 추적
    gtag("event", "download_image", {
      event_category: "download_image"
    });
  };

  // 링크복사
  const handleCopyLink = () => {
    const textArea = LinkRef.current;
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textArea.setSelectionRange(0, 0);
    alert("클립보드에 주소가 복사되었습니다.");

    gtag("event", "copy_link", {
      event_category: "copy_link"
    });
  };

  return (
    <S.MainWrapper>
      <textarea
        ref={LinkRef}
        value={`iirumi.com/irumi/${detailId}`}
        style={{ position: "fixed", top: "-123px" }}
      />
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
          <img src="/my_goMain.png" onClick={() => navigate("/main")} />
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
