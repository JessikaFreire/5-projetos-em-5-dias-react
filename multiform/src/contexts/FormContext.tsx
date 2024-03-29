// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  gitHub: string;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  gitHub: "",
};

type Action = {
  type: FormActions;
  payload: any;
};

type FormProviderProps = {
  children: ReactNode;
};

type ContextType = {
  state: State;
  dispatch: (actions: Action) => void;
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Ruducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGitHub:
      return { ...state, gitHub: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dento do FormProvider");
  }
  return context;
};
