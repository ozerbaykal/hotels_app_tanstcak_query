type Props = {
    point: number;
};

const Rating = ({ point }: Props) => {
    //renk belirle
    const color =
        point >= 4 ? "bg-green-400" : point >= 3 ? "bg-yellow-400" : "bg-red-400";
    return (
        <div>
            <span className={`p-2 rounded-lg text-white font-bold w-fit ${color}`}>
                {point}
            </span>
        </div>
    );
};

export default Rating;
