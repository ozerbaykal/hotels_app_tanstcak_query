
import axios from "axios"
import { Params } from "react-router-dom"
import { PlaceData } from "../types"



//base url e sahip bir axios örneğini oluşturduk
const api = axios.create({ baseURL: "http://127.0.0.1:4001" })

//bütün konaklama verilerini getiren fonksiyon
export const getPlaces = (params: Params) =>
    api.get("/api/places", { params }).then((res) => res.data.places)



//konaklama yeri oluşturma fonksiyonu
export const createPlace = (body: PlaceData) => api.post("/api/places", body)