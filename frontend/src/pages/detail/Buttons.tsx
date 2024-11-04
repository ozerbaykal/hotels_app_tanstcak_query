import { useMutation } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const { isPending, mutate } = useMutation({
        mutationFn: () => deletePlace(id as string),

        onSuccess: () => {
            toast.info("Hotel Akıştan kaldırıldı")
            navigate("/")
        },
        onError: () => {
            toast.error("Üzgünüz bir sorun oluştu")

        }
    });

    return (
        <div className="flex justify-between mb-5">
            <Link
                to={".."}
                className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-gray-200 hover:shadow"
            >
                <MdKeyboardArrowLeft />
                Geri
            </Link>

            <button
                disabled={isPending}
                onClick={() => mutate()}
                className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-red-300 hover:shadow"
            >
                <FaRegTrashAlt />
                Sil
            </button>
        </div>
    );
};

export default Buttons;
