// import React, { createContext, useReducer } from "react";
// import { authReducer } from "./reducer";
// import { AuthContextType, AuthState } from "./types";

// const initialState: AuthState = {
//   access: undefined,
//   user: undefined,
// };

// export const AuthContext = createContext<AuthContextType>({
//   state: initialState,
//   dispatch: () => null,
// });

// export const AuthProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };