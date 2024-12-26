import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import Wash from "../../../components/Wash";
import Step from "../../../components/Step";
import PageController from "../../../components/PageController";
import Header from "../../../components/Header";

const MainPage = () => {
    const navigate = useNavigate();
    const [selectedWasher, setSelectedWasher] = useState("");
    const [washers, setWashers] = useState([]);

    useEffect(() => {
        const roomId = localStorage.getItem("roomId"); // 로컬 스토리지에서 세탁실 ID 가져오기
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/wash/washers`, {
                    params: { roomid: roomId },
                });
                const data = response.data;

                // API 응답이 배열인지 확인
                if (Array.isArray(data)) {
                    setWashers(data);
                } else {
                    console.error("API did not return an array:", data);
                    setWashers([]);
                }
            } catch (error) {
                console.error("Fetch Error:", error);
                setWashers([]); // 에러 시 빈 배열로 초기화
            }
        };

        // 주기적으로 데이터를 갱신
        const intervalId = setInterval(fetchData, 10000);

        // 컴포넌트가 마운트될 때 데이터 초기 요청
        fetchData().then();

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(intervalId);
    }, []);

    return (
        <S.Wrapper>
            <Header />
            <S.TitleContainer>
                <Step step={1} />
                <S.ValueContainer>
                    <S.Title onClick={() => navigate("/adminPW")}>
                        사용할 세탁기
                    </S.Title>
                </S.ValueContainer>
            </S.TitleContainer>
            <S.WashContainer>
                {Array.isArray(washers) && washers.length > 0 ? (
                    washers.map((washer, index) => (
                        <Wash
                            key={index}
                            washer={washer}
                            selectedWasher={selectedWasher}
                            setSelectedWasher={setSelectedWasher}
                        />
                    ))
                ) : (
                    <S.Error>세탁기를 불러올 수 없습니다. 다시 시도해 주세요.</S.Error>
                )}
            </S.WashContainer>
            <PageController
                page={"/time"}
                active={selectedWasher}
                error="선택된 기기가 없습니다"
            />
        </S.Wrapper>
    );
};

export default MainPage;
