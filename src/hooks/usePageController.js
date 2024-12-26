import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const usePageController = (page = '', active, error) => {
    if (page === '/end') {

    }
    const navigate = useNavigate();
    const goBack = () => {navigate(-1)}
    const goNext = () => {navigate(page)}
    const goNextHandler = () => {
        if (!active) alert(error)
        else if (page === '/end') {
            const getValue = (name) => {
                return Number(localStorage.getItem(name));
            }
            const washerId = getValue("washerId");
            const userId = getValue("userId");
            const washMinutes = getValue("washMinutes");
            const postData = () => {
                axios.post(`${process.env.REACT_APP_SERVER_URL}/wash/usewasher`, null, {
                    params: {
                        washerId: washerId,
                        userId: userId,
                        washMinutes: washMinutes,
                    }
                }).then(() => {
                    goNext()
                }).catch(err => {
                    console.log(err.status);
                    alert('학번이 존재하지 않습니다')
                });
            }
            postData()
        }
        else {goNext()}
    }
    return {goBack, goNextHandler}
}
export default usePageController;