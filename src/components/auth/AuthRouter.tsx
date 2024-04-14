import { FC, ReactNode, useEffect } from 'react'
import { useRouter } from "next/navigation";

type P = {
    children: ReactNode
}

const AuthRouter: FC<P> = ({ children }) => {
    const router = useRouter()

    useEffect (() => {
        let email = localStorage.getItem("email")
        if (email) {
            router.push('/search-response')
        }
    }, [])

    return <div>
        {children}
    </div>
}
export default AuthRouter;