import styled from 'styled-components'

export const Container = styled.section`

    width: 100%;
    height: 5rem;
    border-bottom: 2px solid #FFFFFF;
    position: fixed;
    z-index: 4;
    background: #F2F4F5;
    nav{
        display: flex;
        padding: 0 2rem;
        padding: 12px 0;
        margin-left: 30px;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            align-self: center;
                strong{
                    margin-left: 5px;
                }   
        }
        
        ul{
            display: flex;
            list-style: none;
            margin-right: 60px;
            align-self: center;
                li{
                    margin-right: 20px;
                    width: 20px;
                    height: 20px;
                }
        }

    }

    .ultimoIconeHeader{
        margin-right: 80px;
        button{
            background: none;
            border: none;
        }
    }

    @media (max-width: 750px){
        .ultimoIconeHeader{
            display: none;
        }
        .notificacao{
            display: none;
        }
     }
`;