import styled from "styled-components";


export const Container = styled.section`
    display: none;
    position: fixed;
    margin-top: -4vh;
    width: 100vw;
    height: 40px;
    background: #969CB2;
    justify-content: flex-start;
    align-self: flex-end;
        ul{
            margin: 0 auto;
            align-self: center;   
            padding-left: 0px;
            li{
                text-decoration: none;
                list-style: none;
                margin-bottom: 0px;
                padding-left: 0px;
                    .IconsSidbar{
                        height: 25px;
                        width: 25px;
                    }
                cursor: pointer;
            }
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


    @media (max-width: 750px){
        display: flex;
     }

`;