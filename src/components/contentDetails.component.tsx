// ./src/components/ContentDetails.tsx
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import Course from "../interfaces/course.interface"

const ContentDetails: React.FC = () => {
    const dummyCourses: Course[] = [
        { id: 1, image1: "bandeja-paisa-1.jpg", image2: "bandeja-paisa-2.jpg", name: "Bandeja Paisa", description: "Un plato tradicional de la región Paisa", videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 2, image1: "ajilaco-santafareño-1.jpg", image2: "ajilaco-santafareño-2.jpg", name: "Ajilaco Santafareño", description: "Una sopa típica de Bogotá", videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 3, image1: "sancocho-1.jpg", image2: "sancocho-2.jpg", name: "Sancocho", description: "Un guiso delicioso que varía según la región", videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { id: 4, image1: "lechona-tolimense-1.jpg", image2: "lechona-tolimense-2.jpg", name: "Lechona Tolimense", description: "Cerdo con garbanzos y verduras en una receta especial", videoLink: "https://www.youtube.com/watch?v=a6k6-0-w-4I" },
    ]

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    // Asegura que `id` sea un número válido
    const course = dummyCourses.find(course => course.id === parseInt(id || "", 10))
    if (!course) return <p>Curso no encontrado</p>

    return (
        <div className="course-details-page">
            <nav className="breadcrumb">
                <button onClick={() => navigate('/')} className="breadcrumb-button">Inicio</button>
                <button onClick={() => navigate('/cursos')} className="breadcrumb-button">Cursos</button>
                <span className="breadcrumb-text">Detalles</span>
            </nav>
            <div className="course-details-container">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${course.image1}`}
                    alt={course.name}
                    className="course-detail-image"
                />
                <div className="course-detail-info">
                    <h2 className="course-detail-name">{course.name}</h2>
                    <p className="course-detail-description">{course.description}</p>
                    <a href={course.videoLink} target="_blank" rel="noopener noreferrer" className="course-detail-link">Ver video</a>
                </div>
            </div>
        </div>
    )
}

export default ContentDetails
