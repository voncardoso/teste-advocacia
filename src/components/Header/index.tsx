import Avatar from 'react-avatar'
import {AiOutlineBell} from 'react-icons/ai';
import { BiLogOut } from "react-icons/bi";
import {Container} from './style';
import {  useNavigate } from "react-router-dom";





export function Header(){


    return(
        <Container>
            <nav>
                <div>
                    <Avatar size="50" round={true} name="Rafael Santos" color="#525d6e" className="avatar"/>
                        <strong>Rafael Santos</strong>
                </div>
                <ul>
                    <li className="notificacao">
                        <AiOutlineBell/>
                    </li>
                    
                    <li className="ultimoIconeHeader">
                        <button>
                            <BiLogOut size='16'/>
                        </button>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}