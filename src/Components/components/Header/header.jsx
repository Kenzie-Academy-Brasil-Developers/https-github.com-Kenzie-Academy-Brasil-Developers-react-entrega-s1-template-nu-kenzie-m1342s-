import imagem from '../../../assets/Nu Kenzie.png'


export function Header() {
    return(
        <>
<header className='cabecalho'>
    <img className="logo" src={imagem} alt="Logo Nu Kenzie"/>
</header>
    <hr/>
    </>
    )
}