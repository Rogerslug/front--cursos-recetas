// ./src/components/mainContent.component.tsx
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import CoursesAPI from "../services/courses.service" // Comentado para posterior implementación de la Base de Datos
import ContentCard from "./contentCard.component"

const MainContent: React.FC = () => {
    const dummyCourses = [
        [1, "bandeja-paisa-1.jpg", "bandeja-paisa-2.jpg", "Bandeja Paisa", "Un plato tradicional de la región Paisa", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [2, "ajilaco-santafareño-1.jpg", "ajilaco-santafareño-2.jpg", "Ajilaco Santafareño", "Una sopa típica de Bogotá", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [3, "sancocho-1.jpg", "sancocho-2.jpg", "Sancocho", "Un guiso delicioso que varía según la región", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [4, "lechona-tolimense-1.jpg", "lechona-tolimense-2.jpg", "Lechona Tolimense", "Cerdo con garbanzos y verduras en una receta especial", "https://www.youtube.com/watch?v=a6k6-0-w-4I"],
    ]

    const navigate = useNavigate()
    const [transformedCourses, setTransformedCourses] = useState<any[]>([])
    const itemsPerPage = 4
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await new CoursesAPI().getAllCourses()
                const response = dummyCourses
                const transformedCourses = response.map((items: any[]) => ({
                    id: items[0],
                    image1: `${process.env.PUBLIC_URL}/assets/img/${items[1]}`,
                    image2: `${process.env.PUBLIC_URL}/assets/img/${items[2]}`,
                    title: items[3],
                    subtitle: items[4],
                }))
                setTransformedCourses(transformedCourses)
                setTotalPages(Math.ceil(transformedCourses.length / itemsPerPage))
            } catch (error) {
                console.log(`Error al obtener cursos: ${error}`)
            }
        }
        fetchCourses()
    }, [])

    const startIndex = (page - 1) * itemsPerPage
    const currentCourses = transformedCourses.slice(startIndex, startIndex + itemsPerPage)

    return (
        <main className="main-content">
            <div className="breadcrumb">
                <span className="breadcrumb-item" onClick={() => navigate("/")}>Inicio</span>
            </div>
            <div className="container">
                <div className="intro-text-container">
                    <div className="ad-text-box">
                        <h2>Explora nuestras recetas y descubre el chef que hay en ti 👩‍🍳👨‍🍳</h2>
                        <h4>¡Las mejores recetas para niños!</h4>
                        <p>Nuestra plataforma ofrece una variedad de recetas pensadas especialmente para los más pequeños, con pasos sencillos y divertidos. ¡Aprender a cocinar nunca fue tan entretenido!</p>
                        <br />
                        <button onClick={() => navigate("/recetas")}>Ver todas las recetas</button>
                        <br />
                    </div>
                    <div className="intro-text-box-container">
                        <div className="intro-text-box">
                            <div className="text-box">👋 ¡Hola, pequeño chef!</div>
                            <div className="text-box">Aprende a cocinar con recetas fáciles y seguras</div>
                            <div className="text-box">¡Es hora de divertirse en la cocina! 🥄</div>
                        </div>
                        <div className="intro-text-box">
                            <div className="text-box">Explora nuestras recetas y descubre el chef que hay en ti 👩‍🍳👨‍🍳</div>
                            <div className="text-box">¡Las mejores recetas para niños!</div>
                            <div className="text-box">¡Aprender a cocinar nunca fue tan entretenido!</div>
                        </div>

                    </div>
                </div>
                <div className="intro-img-container">
                    <img src={process.env.PUBLIC_URL + "/assets/img/bandeja-paisa-1.jpg"} alt="Bandeja Paisa" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/bandeja-paisa-2.jpg"} alt="Bandeja Paisa" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/ajilaco-santafareño-1.jpg"} alt="Ajilaco Santafareño" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/ajilaco-santafareño-2.jpg"} alt="Ajilaco Santafareño" />
                </div>
            </div>
            <div className="content-card-container">
                {currentCourses.map((course) => (
                    <ContentCard
                        key={course.id}
                        id={course.id}
                        image1={course.image1}
                        image2={course.image2}
                        title={course.title}
                        subtitle={course.subtitle}
                        onClick={() => navigate(`/curso/${course.id}`)}
                    />
                ))}
            </div>
        </main>
    )
}

export default MainContent