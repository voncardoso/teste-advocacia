import  Modal  from "react-modal";
import axios from 'axios'
import  Modal1  from "react-modal";
import closeImg from '../../assests/close.svg';
import {Container} from './style';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface NewTransactionModal{
    isOpen: boolean,
    OnRequestClose: () => void;
  }
  
  interface IFormInputs {
      limpezaMecaIniDireita: string
    }
  const schema = yup.object({
      limpezaMecaIniDireita: yup.string().required(),
    }).required();
  
  Modal.setAppElement('#root');

  export function ModalAddUser({isOpen,OnRequestClose}: NewTransactionModal){
  const {register, handleSubmit, formState:{ errors }} =  useForm<IFormInputs>({
      resolver: yupResolver(schema)
  });;
  const [isNewUserModalOpen, setIsNewUserOpen] = useState(false);
  let dateTime = new Date();


  const [name, setName] = useState('');
 

  const [simbulo, setSimbulo] = useState('');
 

  const [dataCriacao, setDataCriacao] = useState('');
  

function handleOpenNewUserModal() {
    setIsNewUserOpen(true);
}

function handleCloseNewUserModal() {
    setIsNewUserOpen(false);
    window.location.reload();
}

function addNewUser(){
    axios.post('https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores',
    {
        simbolo: simbulo,
        nome: name,
        dataCadastro: dateTime,
    }
    )
    .then((response: any)=>{
      alert("Cadastrado com sucesso");
      OnRequestClose();
    })
    .catch(error => console.log(error));
  }

  return(
    <>
        <Modal1
            isOpen={isNewUserModalOpen}
            onRequestClose={handleCloseNewUserModal}
            overlayClassName="react-modal-overlay-sucesso"
            className="react-modal-content-sucesso"
        >
            <div className="CadastroSucesso">
                <IconContext.Provider value={{className: "global-class-name" }}>
                    <div className="teste">
                        <AiOutlineCheckCircle color="#0074D8" size={100}/>
                    </div>
                </IconContext.Provider>
                
                <h4>Usuário Cadastrado</h4>
                <button onClick={handleCloseNewUserModal}>Fechar</button>
            </div>
        </Modal1>
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <button  className="CloseMdal"
                    onClick={OnRequestClose}
                >
                    <img src={closeImg} alt="fechar modal" />
                </button>

                <form onSubmit={handleSubmit(addNewUser)}>
                
                <section className="ServicoPreliminares">
                    <h1>Cadastrar Usuario</h1>
                    <div>
                        <ul>
                            <li>
                                <label>Nome</label>
                                <input 
                                    type="string" 
                                    id="numeroContarto" 
                                    {...register('limpezaMecaIniDireita') }
                                    onChange={(event: any)=>{
                                        setName(event.target.value)
                                 }} required
                                 value={name}
                                 placeholder="Rafale"
                                />
                                
                            </li>
                            <li>
                                <label>Simbulo</label>
                                
                                <input type="string" 
                                onChange={(event: any)=>{
                                       setSimbulo(event.target.value)
                                }} required
                                value={simbulo}
                                placeholder="Cardoso"
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                    <button type="submit" className="ButtonEnviarSubmit">Cadastrar Usuários</button>
                </form>
            </Container>
        </Modal>
    </>
  )
}