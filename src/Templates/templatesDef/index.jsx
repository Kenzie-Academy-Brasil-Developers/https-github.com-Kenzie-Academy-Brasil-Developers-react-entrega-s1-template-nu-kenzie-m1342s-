import { Header } from "../../Components/components/Header/header"

export function DefTempl({children}) {
    return (
        <>
        <Header />
       <main>
        {children}
       </main>
        </>
    )
}