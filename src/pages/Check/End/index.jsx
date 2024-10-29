import React, {useEffect} from "react";
import * as S from "./styles";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const EndPage = () => {
    const navigate = useNavigate();
    const washerId = localStorage.getItem("washerId");
    const userId = localStorage.getItem("userId");
    const washMinutes = localStorage.getItem("washMinutes");

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/wash/usewashers`,{
            params: {
                washerId: washerId,
                userId: userId,
                washMinutes: washMinutes,
            }
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <S.Wrapper>
            <S.Content>완료</S.Content>
        </S.Wrapper>
    )
}
export default EndPage;