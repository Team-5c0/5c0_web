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
        return axios.post(`/wash/usewasher`, null, {
            params: {
                washerId: washerId,
                userId: userId,
                washMinutes: washMinutes,
            }
        }).then(res => {
            setDone(true);
            return res.status;
        }).catch(err => {
            console.log(err.status);
            return err.status;
        });
    }

    return {done,postData};
}
export default useWashing;