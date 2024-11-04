import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useText = (placeHolder = '', length = 0, goto = '/', saveAs = 'userId') => {
    const [text, setText] = useState(placeHolder);
    const navigate = useNavigate();
    const texting = (e) => {
        let data = text + e

        if (e === 'clear') {
            data = ''
        }
        if (data.length > length) {
            data = text
        }
        if (data.length === 0) {
            data = placeHolder
        }
        else if (data === placeHolder) {
            data = e === 'enter' ? placeHolder : e
        }
        if(e === 'enter' && text.length === length) {
            localStorage.setItem(saveAs,text)
            navigate(goto);
        }
        setText(data);
    }
    return {text,length,texting};
}
export default useText;