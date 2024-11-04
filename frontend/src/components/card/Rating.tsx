type Props = {
    point: number;
    expand?: boolean
};

const Rating = ({ point, expand }: Props) => {
    //renk belirle
    const color =
        point >= 4 ? "bg-green-400" : point >= 3 ? "bg-yellow-400" : "bg-red-400";
    const text = point >= 4.5 ? "Harika" : point >= 4 ? "Güzel" : point >= 3 ? "İyi" : point >= 2 ? "Kötü" : "Çok Kötü"

    return (
        <div className="flex items-center ">
            <span className={`p-2 rounded-lg text-white font-bold w-fit ${color}`}>

                {point}
            </span>
            {expand &&
                (<span className="font-semibold text-lg ms-2">{text}</span>
                )

            }
        </div>
    );
};

export default Rating;
