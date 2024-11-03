import { Link } from "react-router-dom";
import { Place } from "../../types"
import Status from "./Status";
import Rating from "./Rating";

type Props = {
    place: Place;
}


const Card = ({ place }: Props) => {
    return (
        <Link
            to={`/place/${place.id}`}
            className="border rounded-md p-4 gap-3 min-h-[300px] grid grid-cols-3"
        >
            <div className="">
                <img className="w-full h-full object-cover rounded-lg" src={place.image_url} />
            </div>

            <div className="col-span-2 flex flex-col justify-between" >
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-2xl">{place.name}</h1>
                        <Status availability={place.availability} />
                    </div>
                    <p>{place.location}</p>
                    <div className="flex gap-4">
                        {place.amenities.slice(0, 2).map((i, key) => (<span className="border bg-blue-50 p-1 rounded-md" key={key}>{i}</span>))}
                    </div>
                    <Rating point={place.rating} />

                </div>
                <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold">{place.price_per_night}$
                    </span>
                    <span className="text-xs text-zinc-500 ">Vergiler ve ücretler dahil</span>
                </div>

            </div>

        </Link>
    )
}

export default Card