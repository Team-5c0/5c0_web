import { useState } from "react";

const useText = (value = '', type = 'time') => {
    const [text, setText] = useState(value || '0');
    const [active, setActive] = useState(false);
    const error = type === 'time' ? '시간을 입력하여 주세요' : '학번을 전부 입력하여 주세요';

    const texting = (e) => {
        if (e === 'back') {
            setText(text.slice(0, -1) || '0'); // 마지막 문자 제거
            setActive(false);
        } else if (e === 'clear') {
            setText(value || '0'); // 초기 값으로 리셋
            setActive(false);
        } else {
            const input = parseInt((text.toString() || '') + e, 10) || 0;
            if (type === 'time') {
                if (input > 0 && input < 1000) setActive(true);
                setText(input >= 999 ? '999' : input.toString());
            } else {
                if (input.toString().length === 4) setActive(true);
                setText(input.toString());
            }
        }
    };

    return { text, texting, active, error };
};

export default useText;
