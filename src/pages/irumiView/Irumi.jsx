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

  // 내용
  const [lanternDetail, setLanternDetail] = useState(null); // 초기값을 null로 설정
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(false);
  const [lightBool, setLightBool] = useState(false);

  // 로딩 상태
  const [loading, setLoading] = useState(true);

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
      setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
    } catch (error) {
      // console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
      setLanternDetail(null); // 에러가 발생한 경우 데이터를 null로 설정
      setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
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

        {loading ? (
          // 데이터 로딩 중인 경우 로딩 스피너 또는 메시지 표시
          <></>
        ) : (
          // 데이터 로딩이 완료된 경우 컴포넌트를 렌더링
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
