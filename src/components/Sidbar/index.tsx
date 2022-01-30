import {useState} from 'react'
import {
    AiOutlineUserAdd,
    AiOutlineSnippets,
    AiOutlineFileAdd,
    AiOutlineTeam,
} from 'react-icons/ai';
import {MdOutlineTimeline} from 'react-icons/md';
import { ModalAddUser } from '../ModalAddUser';
import {Container} from './style';



export function Sidbar(){

    const buttomAddContracts = document.querySelector('.buttomAddContracts');
    const buttomAddUser = document.querySelector('.buttomAddUser');
    const [isNewContarctModalOpen, setIsNewContarctOpen] = useState(false);
    const [isNewUserModalOpen, setIsNewUserOpen] = useState(false);

    function handleOpenNewContarctModal() {
        setIsNewContarctOpen(true);
    }
  
    function handleCloseNewContractModal() {
        setIsNewContarctOpen(false);
    }

    function handleOpenNewUserModal() {
        setIsNewUserOpen(true);
    }
  
    function handleCloseNewUserModal() {
        setIsNewUserOpen(false);
    }

    return(
        <>
        <Container>
            <ul>
                <li >
                    <AiOutlineUserAdd color="#FFFFFF" className="IconsSidbar" onClick={handleOpenNewUserModal}/>
                </li>
            </ul>
        </Container>
        <ModalAddUser
            isOpen={isNewUserModalOpen} 
            OnRequestClose={handleCloseNewUserModal}
        />

        </>
    );
}