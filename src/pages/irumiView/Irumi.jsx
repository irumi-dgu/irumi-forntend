import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { API } from "../../api/axios";

import html2canvas from "html2canvas";
import saveAs from "file-saver";

function IrumiView() {
  const { detailId } = useParams();
  // 내용
  const [lanternDetail, setLanternDetail] = useState([]);

  // get 해올거
  const fetchLanternDetailData = async () => {
    try {
      // const response = await API.get("/api/lanterns")
      const response = await API.get(`/api/lanterns/${detailId}`);
      setLanternDetail(response.data);
      // results
      console.log(response.data);
      // console.log(lanternDetail);
    } catch (error) {
      console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };
  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

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
      <button
        onClick={handleDownload}
        style={{
          color: "white",
          position: "absolute",
          margin: "30px",
          zIndex: "60"
        }}
      >
        다운로드으으
      </button>
      <S.IrumiViewWrapper ref={LanternRef}>
        <S.BackBtnBox>
          <Link to="/lanterns">
            <BackBtn />
          </Link>
        </S.BackBtnBox>
        {[lanternDetail].map(item => (
          <DetailLantern key={item.id} data={item} />
        ))}
      </S.IrumiViewWrapper>
    </>
  );
}

export default IrumiView;
