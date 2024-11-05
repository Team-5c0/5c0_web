import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as S from './style';
import Wash from "../../../components/Wash";
import {useNavigate} from "react-router-dom";
import Step from "../../../components/Step";


const MainPage = () => {
    const navigate = useNavigate();
    const [washers, setWashers] = useState([]);

    useEffect(() => {
        const roomId = localStorage.getItem("roomId");  //로컬스토리지에 세탁실 위치 저장
        const fetchData = async () => {
            try {
                const response = await axios.get(`/wash/washers`, {
                    params: {roomid: roomId}
                });
                setWashers(response.data);

            } catch (error) {
                console.log(error);
            }

        }

        // 10초 마다 fetchData 함수 호출
        const intervalId = setInterval(fetchData, 10000);

        // 초기 요청 실행
        fetchData();

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(intervalId);
    }, []);


    return (
        <S.Wrapper>
            <S.TitleContainer>
                <Step step={1}/>
                <S.Title onClick={() => {
                    navigate('/adminPW')}}>사용할 세탁기</S.Title>
            </S.TitleContainer>
            <S.WashContainer>
                {washers.map((washer,index) => (
                    <Wash key={index} washer={washer} />
                ))}

            </S.WashContainer>
        </S.Wrapper>
    )
}
export default MainPage;
