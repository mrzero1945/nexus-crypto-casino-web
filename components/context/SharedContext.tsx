import React, { createContext, useState, useContext, ReactNode } from "react";

interface TheSharedContextState{
    sharedBalance: number;
    userAddress: string;
    setUserAddress: React.Dispatch<React.SetStateAction<string>>
    setSharedBalance: React.Dispatch<React.SetStateAction<number>>;
}

const SharedContext = createContext<TheSharedContextState | undefined>(undefined);
const useSharedContext = ()=>{
    const context = useContext(SharedContext);
    if(!context) throw new Error('useBlackjackContext must be used within a BlackjackProvider');
    return context;
};

const SharedProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [sharedBalance, setSharedBalance] = useState<number>(0);
    const [userAddress, setUserAddress] = useState<string>("");
    return (
        <SharedContext.Provider value={{sharedBalance, setSharedBalance, userAddress, setUserAddress}}>
            {children}
        </SharedContext.Provider>
    )
}

export{useSharedContext,SharedContext,SharedProvider  };
export type {TheSharedContextState}