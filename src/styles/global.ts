import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background: #F2F4F5;
        --webkit-font-font-smooth: antialiased; // deixar a finte mais nitida
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }



    .react-modal-overlay{
        border: none;
        z-index: 8;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        border: none;
        overflow: scroll;
        z-index: 8;
        max-width: 700px;
        width: 100%;
        margin: 0px 30px;
        height: 95vh;
        background: #F2F4F5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
            .fotos{
                display: flex;
                border: none;
                margin: 0 auto;
                max-width: 900px;
                max-height: 85vh;
            }
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
    }

    .react-modal-overlay-relatorio{
        z-index: 8;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content-relatorio{
        overflow: scroll;
        z-index: 8;
        max-width: 1000px;
        width: 100%;
        margin: 0px 30px;
        height: 95vh;
        background: #F2F4F5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
            .fotos{
                display: flex;
                border: none;
                margin: 0 auto;
                max-width: 600px;
                max-height: 85vh;
            }
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
    }

    .react-modal-overlay-pdf{
        border: none;
        z-index: 8;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content-pdf{
        border: none;
        z-index: 8;
        max-width: 400px;
        width: 100%;
        margin: 0px 30px;
        height: 400px;
        background: #F2F4F5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
            .p{
                font-size: 1.25rem;
                text-align: center;
                padding-bottom: 20px;
                margin-top: 2vh;
                align-self: center;
                
            }
            .blueSpan{
                color: #1D63CB;
                font-weight: bold;
                font-size: 1.25rem;
                text-align: center;
            }
            .ButtonPdf{
                position: relative;
                left: 30%;
                border: none;
                padding: 8px 14px;
                border-radius: 5px;
                background: #1D63CB;
                color: #FFFFFF;
                letter-spacing: 1px;
                font-weight: 400;
            }
            .ButtonPdf:hover{
                background: rgba(29, 99, 203, 0.8);   
            }
            .CloseMdal{
                position: absolute;
                top: -20px;
                padding: 0 .5rem;
                left: 90%;
                height: 2rem;
                background: none;
                border-radius:  0.25rem;
                border: 0;
                font-size: 1rem;
                margin-top:  1.5rem;
                font-weight: 600;
            }
    }

    .react-modal-overlay-sucesso{
        border: none;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content-sucesso{
        border: none;
        z-index: 10;
        max-width: 300px;
        width: 100%;
        margin: 0px 30px;
        height: 300px;
        background: #F2F4F5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        display: flex;
           .CadastroSucesso{
                max-width: 400px;
                justify-content: center;
                align-items: center;
                align-self: center;
                margin: 0 auto;
                h4{
                    font-size: 1.255rem;
                    color: #0074D8;
                }
                button{
                    display: flex;
                    margin-top: 40px;
                    margin-left: auto;
                    margin-right: auto;
                    border: none;
                    background: #0074D8;
                    color: #FFFFFF;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 1.125rem;
                }
                Button:hover {
                    background: rgba(0,116,216, 0.8);
                }

           }
           .global-class-name{
            width: 87.5px;
           }
           .teste{
               width: 87.5px;
            
               margin: 0 auto;
           }
    }
`;