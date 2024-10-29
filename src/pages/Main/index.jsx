import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as S from './styles';
import Wash from "../../components/Wash/Wash";
import {useNavigate} from "react-router-dom";


const MainPage = () => {
    // const roomId = localStorage.getItem("roomid");  //로컬스토리지에 세탁실 위치 저장
    const navigate = useNavigate();
    const [washers, setWashers] = useState([]);

    useEffect(() => {
        // const roomId = localStorage.getItem("roomId");  //로컬스토리지에 세탁실 위치 저장
        const roomId = 1
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/wash/washers`, {
                    params: {roomid: roomId}
                });
                setWashers([response.data])

            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    }, [])

    return (
        <S.Wrapper>
            <S.Title onClick={() => {
                navigate('/adminPW')}}>세탁기 선택</S.Title>
            <S.Container>
                {washers.map((washer) => (
                    <Wash values={washer[0]}/>
                ))}

            </S.Container>
        </S.Wrapper>
    )
}
export default MainPage;