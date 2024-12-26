import {useNavigate} from "react-router-dom";
import useWashing from "./useWashing";

const usePageController = (page = '', active, error) => {

    const navigate = useNavigate();
    const washing = useWashing();
    const goBack = () => {navigate(-1)}
    const goNext = () => {navigate(page)}
    const goNextHandler = () => {
        if (!active) alert(error)
        else if (page === '/end') {
            washing.postData()
            if (washing.done) goNext()
            else alert('학번이 존재하지 않습니다')
        }
        else {goNext()}
    }
    return {goBack, goNextHandler}
}
export default usePageController;