// src/services/rag.service.ts
import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export default class RagAPI {
    async getEmbeddingRag(data: any) {
        try {
            console.log("Ejecutando la obtención del embedding")
            const response = await axios.post(`${API_URL}/embeddingRag`, data)
            console.log(`Obtenido los embeddings: ${response.data}`)
            return response
        } catch (error) {
            console.log(error)
            return { error }
        }
    }
}