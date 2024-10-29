import React, {useEffect} from "react";
import * as S from "./styles";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const EndPage = () => {
    const navigate = useNavigate();
    const washerId = localStorage.getItem("washerId");
    const userId = localStorage.getItem("userId");
    const washMinutes = localStorage.getItem("washMinutes");

    // console.log(washerId,washMinutes);

    useEffect(() => {
        axios.post(`/wash/usewasher`,null,{
            params: {
                washerId: washerId,
                userId: userId,
                washMinutes: washMinutes,
            }
        }).then(res => {
            console.log(res);
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