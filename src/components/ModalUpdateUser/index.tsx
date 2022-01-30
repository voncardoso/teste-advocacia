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
    id: number;
  }
  
  interface IFormInputs {
      limpezaMecaIniDireita: string
    }
  const schema = yup.object({
      limpezaMecaIniDireita: yup.string().required(),
    }).required();
  
  Modal.setAppElement('#root');

  export function ModalUpdateUser({isOpen,OnRequestClose, id}: NewTransactionModal){
  const {register, handleSubmit, formState:{ errors }} =  useForm<IFormInputs>({
      resolver: yupResolver(schema)
  });;
  const [isNewUserModalOpen, setIsNewUserOpen] = useState(false);
  let dateTime = new Date();
  let dateUpdate = new Date();

  const [name, setName] = useState('');
 

  const [simbulo, setSimbulo] = useState('');
 
  
  console.log("modalUP",id);
function handleOpenNewUserModal() {
    setIsNewUserOpen(true);
}

function handleCloseNewUserModal() {
    setIsNewUserOpen(false);
    window.location.reload();
}

  function update(){
    axios.patch(`https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores/${id}`,[
        {
            simbolo: simbulo,
            nome: name,
            dataAlteracao: dateUpdate,
        }
    ])
    .then(response =>{
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
  };

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


                <form onSubmit={handleSubmit(update)}>
                <section className="ServicoPreliminares">
                    <h1>Atualizar Usuários</h1>
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
                                 placeholder="A13"
                                />
                                
                            </li>
                            <li>
                                <label>Simbulo</label>
                                
                                <input type="string" 
                                onChange={(event: any)=>{
                                       setSimbulo(event.target.value)
                                }} required
                                value={simbulo}
                                placeholder="A14"
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                    <button type="submit" className="ButtonEnviarSubmit">Atualizar Usuários</button>
                </form>
            </Container>
        </Modal>
    </>
  )
}