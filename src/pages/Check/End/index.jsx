import React, {useEffect} from "react";
import * as S from "./styles";
import {useNavigate} from "react-router-dom";

const EndPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <S.Wrapper>
            <S.Content>완료</S.Content>
        </S.Wrapper>
    )
}
export default EndPage;