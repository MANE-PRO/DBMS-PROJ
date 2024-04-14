import React, { FC, ReactNode } from 'react'
import { SessionProvider } from "next-auth/react";

interface P {
    children: ReactNode
}

const NextAuthProvider: FC<P> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default NextAuthProvider