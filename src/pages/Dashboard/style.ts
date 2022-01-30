import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
`;


export const Content = styled.div`
    width: 100%;
    height: 100vh; // cria barra de rolagem so para a div tabela
    overflow: scroll;

        table{
            margin: 0 auto;
            margin-top: 8rem;
            justify-content: center;
            align-items: center;
            border-spacing: 0 0.6rem;
                th{
                    color: #969CB2;
                    font-weight: 400;
                    padding: 1rem 2rem;
                    text-align: left;
                    line-height: 1.5rem;
                    letter-spacing: 0.2px;
                    margin-bottom: 5px;
                }

                td {
                   padding: 1.4rem 2rem;
                    border-bottom: solid 10px #F2F4F5;
                    background: #FFFFFF;
                    color: #18111D;
                    letter-spacing: 0.2px;
                    margin-bottom: 20px;
                    &:first-child {
                        border-bottom-left-radius: 1rem;
                        border-top-left-radius: 1rem;
                    }
                

                    &.ativo{
                        color: var(--green);
                    }
                   

                    &.withdraw{
                        color: var(--red);
                    }
                 }
                 .ultimo{
                    border-bottom-right-radius: 1rem;
                    border-top-right-radius: 1rem;
                }
                
                .status{
                    color: #33CC95;
                }

                .icone{
                    //display: flex;
                    align-self: center;
                    align-items: center;
                    cursor: pointer;
                    margin-bottom: 5px;
                }

                .statusEcerrado{
                    color: #E52E4D;
                }

        }

        .NullContracts{
            display: flex;
            width: 100%;
            height: 60vh;
            justify-content: center;
            align-items: center;
                h1{
                    margin: 0 auto;
                    color: #969CB2;
                }
        }
        
`;