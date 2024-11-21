// ./src/components/courses.component.tsx
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ContentCard from "./contentCard.component"

const Courses: React.FC = () => {
    const navigate = useNavigate()
    const dummyCourses = [
        [1, "bandeja-paisa-1.jpg", "bandeja-paisa-2.jpg", "Bandeja Paisa", "Un plato tradicional de la región Paisa", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [2, "ajilaco-santafareño-1.jpg", "ajilaco-santafareño-2.jpg", "Ajilaco Santafareño", "Una sopa típica de Bogotá", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [3, "sancocho-1.jpg", "sancocho-2.jpg", "Sancocho", "Un guiso delicioso que varía según la región", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        [4, "lechona-tolimense-1.jpg", "lechona-tolimense-2.jpg", "Lechona Tolimense", "Cerdo con garbanzos y verduras en una receta especial", "https://www.youtube.com/watch?v=a6k6-0-w-4I"],
    ]

    const [courses, setCourses] = useState<any[]>([])
    const itemsPerPage = 4
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = dummyCourses
                const transformedCourses = response.map((items: any[]) => ({
                    id: items[0],
                    image1: `${process.env.PUBLIC_URL}/assets/img/${items[1]}`,
                    image2: `${process.env.PUBLIC_URL}/assets/img/${items[2]}`,
                    title: items[3],
                    subtitle: items[4],
                }))
                setCourses(transformedCourses)
                setTotalPages(Math.ceil(transformedCourses.length / itemsPerPage))
            } catch (error) {
                console.log(`Error al obtener cursos: ${error}`)
            }
        }
        fetchCourses()
    }, [])

    const startIndex = (page - 1) * itemsPerPage
    const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage)

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1)
    }

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1)
    }

    return (
        <main className="courses-content">
            <h2>Todos los Cursos</h2>
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
            <div className="pagination-controls">
                <button disabled={page === 1} onClick={handlePreviousPage}>Anterior</button>
                <span>Página {page} de {totalPages}</span>
                <button disabled={page === totalPages} onClick={handleNextPage}>Siguiente</button>
            </div>
        </main>
    )
}

export default Courses
