import { useState } from "react";

const useText = (value = '', length = 0, saveAs = 'userId', time = false ) => {
    const [text, setText] = useState(value);
    const [active, setActive] = useState(false);
    const [error, setError] = useState('');
    const texting = (e) => {
        let data = text + e

        if (e === 'clear') {
            data = '';
            setError('값은 입력하셔야 합니다')}
        if (e === 'back') {data = text.substring(0,text.length-1)}
        if (time) {data = Number(data).toString();setError('최소 1분 이상이어야 합니다')}
        else {setError('학번 네자리를 입력하셔야 합니다.')}
        if (data.length > length) {data = text}
        if(data.length === length) {
            localStorage.setItem(saveAs,data);
            setActive(true);
        }
        else if (time && Number(data) > 0 ) {
            localStorage.setItem(saveAs,data);
            setActive(true);
        }
        setText(data);
    }
    return {text,length,texting,active,error};
}
export default useText;