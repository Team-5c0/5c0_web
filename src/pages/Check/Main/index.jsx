import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import * as S from './style';
import Wash from "../../../components/Wash";
import Step from "../../../components/Step";
import PageController from "../../../components/PageController";
import Header from "../../../components/Header";


const MainPage = () => {
    const navigate = useNavigate();
    const [selectedWasher, setSelectedWasher] = useState('');
    const [washers, setWashers] = useState([]);
    useEffect(() => {
        const roomId = localStorage.getItem("roomId");  //로컬스토리지에 세탁실 위치 저장
        const fetchData = async () => {
            try {
                const response = await axios.get(`/wash/washers`, {
                    params: {roomid: roomId}
                });
                setWashers(response.data ? response.data : []);

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
            <Header/>
            <S.TitleContainer>
                <Step step={1}/>
                <S.ValueContainer>
                    <S.Title onClick={() => {
                        navigate('/adminPW')}}>사용할 세탁기</S.Title>
                </S.ValueContainer>
            </S.TitleContainer>
            <S.WashContainer>
                {washers.map((washer,index) => (
                    <Wash key={index} washer={washer} selectedWasher={selectedWasher} setSelectedWasher={setSelectedWasher} />
                ))}
            </S.WashContainer>
            <PageController page={'/time'} active={selectedWasher} error='선택된 기기가 없습니다'/>
        </S.Wrapper>
    )
}
export default MainPage;
