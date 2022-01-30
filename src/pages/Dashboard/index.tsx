import axios from 'axios'
import {Container, Content} from './style';
import { AiOutlineSync, AiOutlineDelete} from 'react-icons/ai';
import { Sidbar } from "../../components/Sidbar";
import { SidbarMobile } from "../../components/SidbarMobile";

import  { useState } from 'react';
import {Header} from '../../components/Header';
import {ModalUpdateUser} from '../../components/ModalUpdateUser'

function Dashboard (){
      const updateUser = {
        simbolo: "Srtua",
        nome: "postr",
        dataCadastro: "2022-02-29T03:46:53.080811",
        dataAlteracao: "2022-03-29T03:46:53.0705411",
      }
    const [users, setUser] = useState([]);
    const [isNewUserModalOpen, setIsNewUserOpen] = useState(false);
    const [id , setId] = useState(0);
    function get(){
        axios.get('https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores')
        .then((response:any)=>{
          const data = response.data;
          setUser(data.data);
          return data;
        })
        .catch(error => console.log(error));
      }
    

    


      function deleteUser(id: number){
        axios.delete(`https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores/${id}`)
        .then(response =>{
          alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
      }

      function handleOpenNewUserModal() {
        setIsNewUserOpen(true);
      }
  
      function handleCloseNewUserModal() {
        setIsNewUserOpen(false);
      }

      get();
        return(
          <>
            <Container>
                <Sidbar />
                <Content >
                  <Header/>
                 <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nome</th>
                                <th>Simbulo</th>
                                <th>Data do Cadastro</th>
                            </tr>
                        </thead>
                            
                            <tbody>
                            {users.map((teste: any)=>{
                              console.log(teste)
                                        return(
                                            <tr>
                                            <td>{teste.id}</td>
                                            <td>{teste.nome}</td>
                                            <td>{teste.simbolo}</td>
                                            <td>{
                                                new Date(teste.dataCadastro)
                                                .toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                                            }</td>
                                             <td className='icone' onClick={()=>{
                                               handleOpenNewUserModal()
                                               setId(teste.id)
                                               console.log('dashs', id);
                                             }}> 
                                                <AiOutlineSync color="#969CB2" size={20}/>
                                            </td>

                                            <td className="ultimo icone" onClick={()=>{
                                              deleteUser(teste.id);
                                            }}>
                                                    <AiOutlineDelete color="#969CB2" size={20}/>
                                            </td>
                                            </tr>
                                        )  
                                        })}
                            </tbody>
                    </table>
                </Content>
            </Container>
            <SidbarMobile/>
            <ModalUpdateUser 
               isOpen={isNewUserModalOpen} 
               OnRequestClose={handleCloseNewUserModal}
               id={id}
            />
          </>
        );
};


export default Dashboard;