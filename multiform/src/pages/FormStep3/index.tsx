import { useNavigate, Link } from 'react-router-dom'
import * as C from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }
}, []);

  const handleNextStep = () => {
    if(state.email !== '' && state.gitHub !== '') {
      console.log(state)
      navigate('/resume')
    }else {
      alert('Preencha os campos com seu email e GitHub!')
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGitHub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Então {state.name}, última coisa...</h1>
        <p>Preencha agora com suas informações para contato.</p>

        <hr />

        <label>
          Email
          <input 
          type="email" 
          value={state.email}
          onChange={handleEmailChange}
          />
        </label>

        <label>
          GitHub
          <input 
          type="url" 
          value={state.gitHub}
          onChange={handleGitHubChange}
          />
        </label>

        <Link to='/step2' className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar</button>
      </C.Container>
    </Theme>
  );
};
