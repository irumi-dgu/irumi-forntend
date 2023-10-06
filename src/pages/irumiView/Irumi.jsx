import React, { useEffect, useState } from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { API } from "../../api/axios";

function IrumiView() {
  const { detailId } = useParams();
  // 내용
  const [lanternDetail, setLanternDetail] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(false);

  const [lightBool, setLightBool] = useState(false);

  // get 해올거
  const fetchLanternDetailData = async () => {
    try {
      const response = await API.get(`/api/lanterns/${detailId}`, {
        withCredentials: true
      });
      setLanternDetail(response.data);
      setIsLiked(response.data.is_liked);
      setLikeCount(response.data.like_cnt);
      setLightBool(response.data.light_bool);
    } catch (error) {
      // console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    }
  };
  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

  return (
    <>
      <S.IrumiViewWrapper>
        <S.Header>
          <BackBtn />
        </S.Header>

        {lanternDetail == [] ? (
          [lanternDetail].map(item => (
            <DetailLantern
              key={item.id}
              data={item}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              likeCount={likeCount}
              setLikeCount={setLikeCount}
              lightBool={lightBool}
              setLightBool={setLightBool}
            />
          ))
        ) : (
          <>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA0MjhfMTgz/MDAxNjUxMTU1MDk1NjE3.qUYBXYpzEiB9rLUNmmeuHDb20AcBzLxv9WWXaN7e8XQg.mtFGSMdjWqq0bm6w-RgmM1PCJ_--q-17Ycm9F2KYnQcg.JPEG.2babybears/output_4145535885.jpg?type=w800" />
            <div>없는 연등이거나 오류가 발생했어요~</div>
          </>
        )}
      </S.IrumiViewWrapper>
    </>
  );
}

export default IrumiView;
