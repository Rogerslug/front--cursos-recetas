// ./src/components/header.component.tsx
import React from "react"
import logo from '../../public/logo.svg'

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src={logo} alt="logo"/> */}
                <nav className="nav"/>
                <a href="/">Bienvenido a testeo de plataforma</a>
            </div>
            <nav className="nav">
                <a href="/RAG">¡¡Prueba nuestro RAG!!</a>
                <a href="/cursos">Cursos</a>
            </nav>
        </header>
    )
}

export default Header