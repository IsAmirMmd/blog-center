import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  Reducer,
  useState,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

// Define the types

type AuthContextType = {
  state?: State | null;
  dispatch?: Dispatch<Action>;
  userInfo: {
    name: string;
    _id: number;
  } | null;
};

type LayoutProps = {
  children: ReactNode;
};

type State = {
  loading: boolean;
  error: any;
};

type Action = {
  type: string;
  payload: object;
};

// Create the initial state

const initialState: State = {
  loading: true,
  error: null,
};

// Create context and provider

const AuthContext = createContext<AuthContextType>({
  dispatch: () => {},
  state: null,
  userInfo: null,
});

const AuthContextDispatcher = createContext<Dispatch<Action> | undefined>(
  undefined
);

export function AuthProvider({ children }: LayoutProps) {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  // Reducer function to handle actions

  const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
      case "LOAD": {
        axios
          .get(`http://localhost:5000/api/user/${action.type.toLowerCase()}`, {
            withCredentials: true,
          })
          .then((res) => {
            setUserInfo(res.data);
            return { ...state, user: res.data, loading: false };
          })
          .catch((err) => {
            return {
              ...state,
              loading: false,
              error: err?.response?.data?.message,
            };
          });
        return state;
      }
      case "SIGNIN":
      case "SIGNUP": {
        axios
          .post(
            `http://localhost:5000/api/user/${action.type.toLowerCase()}`,
            action.payload,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            toast.success(
              `با موفقیت ${action.type === "SIGNIN" ? "وارد" : "عضو"} شدید!`
            );
            setUserInfo(res.data);
            return { ...state, user: res.data, loading: false };
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message);
            return {
              ...state,
              loading: false,
              error: err?.response?.data?.message,
            };
          });

        return state;
      }
      case "LOGOUT": {
        axios
          .get(`http://localhost:5000/api/user/${action.type.toLowerCase()}`, {
            withCredentials: true,
          })
          .then((res) => {
            setUserInfo(null);
            // push and refresh page
            window.location.href = "/";
            return { ...state, user: null, loading: false };
          })
          .catch((err) => {
            return {
              ...state,
              loading: false,
              error: err?.response?.data?.message,
            };
          });
        return state;
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD", payload: {} });
  }, []);

  return (
    <AuthContext.Provider value={{ state, userInfo }}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

// Create custom hooks for accessing context values

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthAction() {
  return useContext(AuthContextDispatcher);
}
