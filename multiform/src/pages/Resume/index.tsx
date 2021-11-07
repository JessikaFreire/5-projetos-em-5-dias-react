import { useNavigate, Link } from 'react-router-dom'
import * as C from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from 'react';

export const Resume = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }
}, []);

  return (
    <Theme>
      <C.Container>
        <h1>Resumo</h1>
        <p>Todas as informações foram salvas com sucesso.</p>
        <hr />
        <label>Nome:</label>
        <p>{state.name}</p>
        <label>Email:</label>
        <p>{state.email}</p>
        <label>GitHub:</label>
        <p>{state.gitHub}</p>
      </C.Container>
    </Theme>
  );
};
