import { useQuery } from "@tanstack/react-query"
import { getPlaces } from "../../api"
import { Place } from "../../types"


const List = () => {
    const { isLoading, error, data } = useQuery<Place[]>({
        queryKey: ["places"],
        queryFn: getPlaces


    })
    console.log(data)


    return (

        <div>List</div>
    )
}

export default List