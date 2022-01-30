import styled from "styled-components";
export const Container = styled.section`
display: block;
    .CloseMdal{
        position: absolute;
        top: -10px;
        padding: 0 .5rem;
        left: 96%;
        height: 2rem;
        background: none;
        border-radius:  0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top:  1.5rem;
        font-weight: 600;
    }

    h1{
        font-size: 2.25rem;
        color: #969CB2;
        text-align: center;
        margin-bottom: 30px;
    }



    section{
        border-bottom: 1px solid #969CB2;
        div{
            padding-bottom: 20px;
            h2{
                margin-bottom: 20px;
                font-weight: bold;
            }
            strong{
                margin-bottom: 20px;
                font-size: 1rem;
            }

            ul{
            list-style: none;

            li{
                margin-right: 10px;
                margin-top: 10px;
                label{
                    margin-bottom: 10px;
                }

                input {
                    width: 100%;
                    border-radius: 10px;
                    padding: 10px;
                    border: 1px solid #969CB2;
                    font-size: 1rem;
                    margin-bottom: 20px;
                }

                input:focus{
                    outline: none !important;
                    border: 2px solid #969CB2;
                    border-radius: 10px;
                }
            }
        }
        }
    }

        .ButtonEnviarSubmit{
            max-width: 200px;
            width: 100%;
            margin-top: 30px;
            border: none;
            padding: 15px;
            margin-left: 65%;
            margin-right: 20px;
            background: #969CB2;
            border-radius: 5px;
            color: #FFFFFF;
            font-size: 1rem;
            cursor: pointer;
        }

        .ButtonEnviarSubmit:hover{
            background: rgba(150, 156, 178, 0.8);
        }

        .checkboxGestor{
            width: 50px;
            height: 50px;
            display: flex;
            li{
                display: flex;
                input{
                display: flex;
                width: 50px;
                height: 15px;
                margin-top: 0px;
                align-self: center;
                position: relative;
                left: 0px;
                cursor: pointer;
            }
            label{
                margin: 0px;
                font-size: 0.875rem;
            }
            }
        }
`;
