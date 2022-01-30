import styled from "styled-components";


export const Container = styled.section`
    max-width: 100px;
    width: 100%;
    height: 100vh;
    background: #969CB2;
    display: flex;
    justify-content: flex-start;

        ul{
            margin: 0 auto;
            align-self: center;   
            padding-left: 0px;
            li{
                text-decoration: none;
                list-style: none;
                margin-bottom: 20px;
                padding-left: 0px;
                    .IconsSidbar{
                        height: 25px;
                        width: 25px;
                    }
                cursor: pointer;
            }
        }

        @media(max-width: 900px){
            max-width: 80px;
            width: 100%;
        }

    .timelineButton{
        display: none;
    }

    .timelineButton.active{
        display: block;
    }

    .buttomAddContracts{
        display: none;
    }

    .buttomAddContracts.active{
        display: block;
    }
    .buttomAddUser{
        display: none;
    }
    .buttomAddUser.active{
        display: block;
    }

`;