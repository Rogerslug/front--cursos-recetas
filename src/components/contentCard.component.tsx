import React from "react"
import { useNavigate } from "react-router-dom"

const ContentCard: React.FC<any> = ({ image1, image2, title, subtitle, onClick}) => {
    const navigate = useNavigate() // Este hook nos permite navegar a otros componentes

    return (
        <div className="content-card" onClick={onClick}>
            <div className="content-card-image">
                {/* Las imágenes se alteran dinámicamente en función de encimar el mouse sobre la imagen */}
                <img src={image1} alt="Imagen 1" className="hover-image1" />
                <img src={image2} alt="Imagen 2" className="hover-image2" />
            </div>
            <div className="content-card-text">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default ContentCard