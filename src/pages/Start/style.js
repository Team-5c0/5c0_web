import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(-45deg, #f5d1c1, #d1bed7);
    overflow: hidden;

`
export const ContainerTitle = styled.div`
    z-index: 99;
    width: 45%;
    height: 45%;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    flex-direction: column;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.1);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
`
export const Title = styled.p`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 3em;
`
export const Button = styled(ContainerTitle)`
    width: auto;
    height: auto;
    background: rgba(255, 255, 255, 0.25);
    user-select: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5%;
    &:active {
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
    }
`
export const ButtonText = styled.p`
    font-family: Pretendard-Medium,sans-serif;
`
// export const Circle1 = styled.div`
//     content: "";
//     border-radius: 50%;
//     position: absolute;
//     bottom: 0;
//     right: 10%;
//     height: 30vw;
//     width: 30vw;
//     background-image: linear-gradient(45deg, rgba(245, 209, 193, 0.9), rgba(209, 190, 215, 0.9));
//     transform: translateY(50%);
//     filter: blur(10px);
//
// `
// export const Circle2 = styled.div`
//     position: absolute;
//     border-radius: 50%;
//     top: 1%;
//     left: 1%;
//     height: 20vw;
//     width: 20vw;
//     background-image: linear-gradient(
//             45deg,
//             rgba(245, 209, 193, 0.9),
//             rgba(209, 190, 215, 0.9)
//     );
//     filter: blur(5px);
// `

export const Circle3 = styled.div`
    z-index: 1;
    position: absolute;
    width: 500px;
    height: 500px;
    background: linear-gradient(
        //180deg,
        //rgba(47, 184, 255,0.42) 31.77%,
        //#5c9df1 100%
            180deg,
            rgba(193, 233, 245, 0.54),
            rgba(169, 182, 214, 0.6)
    );
    //mix-blend-mode: color-dodge;
    -webkit-animation: move 25s infinite alternate;
    animation: move 15s infinite alternate ease-in-out;
    transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

    //&:hover {
    //    width: 520px;
    //    height: 520px;
    //    -webkit-filter: blur(30px);
    //    filter: blur(30px);
    //    box-shadow:
    //            inset 0 0 0 5px rgba(255,255,255, 0.6),
    //            inset 100px 100px 0 0px #fa709a,
    //            inset 200px 200px 0 0px #784ba8,
    //            inset 300px 300px 0 0px #2b86c5;
    //}

    @-webkit-keyframes move {
        from {
            transform: translate(-100px, -50px) rotate(-90deg);
            border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
        }

        to {
            transform: translate(300px, 100px) rotate(-10deg);
            border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
        }
    }

    @keyframes move {
        from {
            transform: translate(-300px, -50px) rotate(-90deg);
            border-radius: 20% 76% 35% 65% / 27% 36% 64% 73%;
        }

        to {
            transform: translate(300px, 100px) rotate(-10deg);
            border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
        }
    }`

//
// export const Circle3 = styled.div`
//     position: absolute;
//     width: 10vw;
//     height: 10vw;
//     border-radius: 100%;
//     background: rgba(255, 255, 255, 0.25);
//     animation: move 5s linear infinite;
//
//     @keyframes move {
//         from {
//             transform: translate(-100vw, -25%);
//
//         }
//         to {
//             transform: translate(100vw, -25%);
//         }
//
//     }
// `