import React, { useEffect, useState } from "react";
import * as S from "./style";
import { API } from "../../api/axios";
import { useParams } from "react-router-dom";

function MyDetail() {
  const [lanternDetail, setLanternDetail] = useState([]);
  const { detailId } = useParams();

  const fetchLanternDetailData = async () => {
    try {
      const response = await API.get(`/api/lanterns/${detailId}`);
      setLanternDetail(response.data.results);
    } catch (error) {
      console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };

  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

  return (
    <S.IrumiViewWrapper>
      {lanternDetail.map(item => (
        <S.DetailLanternWrapper key={item.id}>
          <S.DetailLanternImg
            src={`/detail_${item.lantern_color}_${item.light_bool}.png`}
          />
          <S.TitleSec>{item.nickname}</S.TitleSec>
          <S.ContentSec>{item.content}</S.ContentSec>
        </S.DetailLanternWrapper>
      ))}
    </S.IrumiViewWrapper>
  );
}

export default MyDetail;
