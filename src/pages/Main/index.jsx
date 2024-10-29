import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as S from './styles';
import Wash from "../../components/Wash/Wash";
import {useNavigate} from "react-router-dom";


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
                setWashers([response.data])

            } catch (error) {
                console.log(error);
            }

        }

        // 10마다 fetchData 함수 호출
        const intervalId = setInterval(fetchData, 10000);

        // 초기 요청 실행
        fetchData();

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(intervalId);
    }, []);


    return (
        <S.Wrapper>
            <S.Title onClick={() => {
                navigate('/adminPW')}}>세탁기 선택</S.Title>
            <S.Container>
                {washers.map((washer,index) => (
                    <Wash key={index} values={washer[0]}/>
                ))}

            </S.Container>
        </S.Wrapper>
    )
}
export default MainPage;