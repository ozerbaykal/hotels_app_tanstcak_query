import axios from "axios"

//base url e sahip bir axios örneğini oluşturduk
const api = axios.create({ baseURL: "http://127.0.0.1:4001" })

//bütün konaklama verilerini getiren fonksiyon
export const getPlaces = () =>
    api.get("/api/places").then((res) => res.data.places)



// export const getPlace = () => {
//     api.get("/api/places/id")


// }