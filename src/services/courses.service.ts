import axios, { all } from 'axios'

const API_URL = 'http://localhost:5000/api'

export default class CoursesAPI {
    async getAllCourses() {
        try {
            console.log("Ejecutando la obtención de todos los cursos con getAllCourses")
            const allCourses = await axios.post(`${API_URL}/getAllCourses`, {
                query: "SELECT * FROM courses"
            })
            console.log("Cursos obtenidos:", allCourses.data)
            return allCourses.data
        } catch (error) {
            console.log(error)
            return { error }
        }
    }
}
