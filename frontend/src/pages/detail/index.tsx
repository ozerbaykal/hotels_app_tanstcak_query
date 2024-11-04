import { useParams } from "react-router-dom";
import { Place } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../../api";
import Container from "../../components/container";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Buttons from "./Buttons";
import Rating from "../../components/card/Rating";
import Features from "./Features";

const Detail = () => {
    const { id } = useParams();

    const { isLoading, error, data, refetch } = useQuery<Place>({
        queryKey: ["place"],
        queryFn: () => getPlace(id as string),
    });

    return (
        <Container designs="max-w-[700px]">
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Error info={error.message} retry={refetch} />
            ) : (
                data && (
                    <div className="flex flex-col gap-3">

                        <Buttons />

                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-blue-950">{data.name}</h1>
                            <Rating point={data.rating} expand />
                        </div>
                        <p>{data.description}</p>
                        <img src={data.image_url} className="rounded-lg" alt="" />


                        <Features arr={data.amenities} />
                    </div>


                )
            )}
        </Container>
    );
};

export default Detail;
