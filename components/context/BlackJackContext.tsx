import { createContext, useState, useContext, ReactNode } from "react";

interface TheBlackJackState{
    sharedBalance: number;
    setSharedBalance: React.Dispatch<React.SetStateAction<number>>;
}

const BlackJackContext = createContext<TheBlackJackState | undefined>(undefined);
const useBlackJackContext = ()=>{
    const context = useContext(BlackJackContext);
    if(!context) throw new Error('useBlackjackContext must be used within a BlackjackProvider');
    return context;
};

const BlackjackProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [sharedBalance, setSharedBalance] = useState<number>(0);
    return (
        <BlackJackContext.Provider value={{sharedBalance, setSharedBalance}}>
            {children}
        </BlackJackContext.Provider>
    )
}

export{useBlackJackContext,BlackjackProvider, BlackJackContext };
export type {TheBlackJackState}