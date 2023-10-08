import React, { useEffect, useState } from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { API } from "../../api/axios";
import MyDetailBackBtn from "../../components/common/backBtn/LanternsBackBtn";

function IrumiView() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // 내용
  const [lanternDetail, setLanternDetail] = useState(null);
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
      // 데이터 로딩 실패 시 에러 처리
      // console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
      setLanternDetail(null);
    } finally {
      // 데이터 로딩이 끝났음을 나타내는 상태 업데이트
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLanternDetailData();
  }, [detailId]);

  return (
    <>
      <S.IrumiViewWrapper>
        <S.Header>
          <MyDetailBackBtn />
        </S.Header>

        {isLoading ? ( // 데이터 로딩 중인지 확인
          <S.TextWrapper>
            <S.FixText>
              로딩 중 !
              <br /> 잠시만 기다려주세요 :)
            </S.FixText>
          </S.TextWrapper>
        ) : (
          // 데이터 로딩이 완료된 경우에만 연등 정보를 렌더링
          <>
            {lanternDetail === null ? (
              <S.TextWrapper>
                <S.FixText>존재하지 않는 연등이에요</S.FixText>
              </S.TextWrapper>
            ) : (
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
            )}
          </>
        )}
      </S.IrumiViewWrapper>
    </>
  );
}

export default IrumiView;
