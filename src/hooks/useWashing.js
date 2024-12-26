import axios from "axios";
import {useState} from "react";

const useWashing = () => {
    const [done, setDone] = useState(false);
    const getValue = (name) => {
        return Number(localStorage.getItem(name));
    }
    const washerId = getValue("washerId");
    const userId = getValue("userId");
    const washMinutes = getValue("washMinutes");

    const postData = () => {
        setDone(true);
        axios.post(`${process.env.REACT_APP_SERVER_URL}/wash/usewasher`, null, {
            params: {
                washerId: washerId,
                userId: userId,
                washMinutes: washMinutes,
            }
        }).then(() => {
            setDone(true);
        }).catch(err => {
            console.log(err.status);
            setDone(false);
        });
    }

    return {done,postData};
}
export default useWashing;