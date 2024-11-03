import { sortOptions } from "../../constants"

const Filter = () => {
    return (
        <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Nereye ?</label>
                <select
                    className="border py-1 px-4  rounded-md">
                    <option value="">Seçiniz</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Konaklama yeri adına göre ara</label>
                <input type="text" placeholder="örn: Seaside villa"
                    className="border py-1 px-4  rounded-md">
                </input>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Sıralama Ölçütü</label>
                <select
                    className="border py-1 px-4  rounded-md">
                    <option value="">Seçiniz</option>
                    {sortOptions.map((i, key) => <option value={i.value}
                        key={key}>{i.label}</option>)}
                </select>
            </div>


        </form>
    )
}

export default Filter