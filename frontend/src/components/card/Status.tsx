import { CgUnavailable } from "react-icons/cg"
import { MdEventAvailable } from "react-icons/md"

type Props = {
    availability: boolean
}

const Status = ({ availability }: Props) => {
    return (
        <div className={`flex items-center gap-4 border p-2 rounded-md ${availability ? "bg-green-100" : "bg-red-100"}`}>
            {availability ? <MdEventAvailable className="text-xl text-green-700" /> :
                <CgUnavailable className="text-xl text-red-700" />}
        </div>
    )
}

export default Status