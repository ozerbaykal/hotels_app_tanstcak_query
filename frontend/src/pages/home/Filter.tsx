import { useQuery } from "@tanstack/react-query";
import { sortOptions } from "../../constants";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

const Filter = () => {
    const whereRef = useRef<HTMLSelectElement>(null);
    const orderRef = useRef<HTMLSelectElement>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const [params, setParams] = useSearchParams();

    //api 'dan otel verilerini aldık
    const { isLoading, data } = useQuery<Place[]>({
        queryKey: ["places"],
        queryFn: getPlaces,
    });
    //otellerin  lokasyonlarından oluşan benzersiz elemanlara sahip  bir dizi oluşturduk
    const cities = [...new Set(data?.map((i) => i.location))];

    //inputlardan alınan değerleri param olarak url e ekle
    const handleChange = (name: string, value: string) => {
        params.set(name, value);

        setParams(params);
    };

    //bütün inputları url deki prametleri sıfırla
    const handleReset = () => {
        setParams({});
        //todo inputları sıfırlama kodu hata veriyor
    };

    return (
        <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Nereye ?</label>
                {!isLoading && (
                    <select
                        ref={whereRef}
                        onChange={(e) => handleChange("location", e.target.value)}
                        defaultValue={params.get("location") || ""}
                        className="border py-1 px-4  rounded-md"
                    >
                        <option value="">Seçiniz</option>
                        {cities.map((i, key) => (
                            <option key={key}>{i}</option>
                        ))}
                    </select>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Konaklama yeri adına göre ara</label>
                <input
                    ref={inputRef}
                    defaultValue={params.get("title") || ""}
                    onChange={(e) => handleChange("title", e.target.value)}
                    type="text"
                    placeholder="örn: Seaside villa"
                    className="border py-1 px-4  rounded-md"
                ></input>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold"> Sıralama Ölçütü</label>
                <select
                    ref={orderRef}
                    defaultValue={params.get("order") || ""}
                    onChange={(e) => handleChange("order", e.target.value)}
                    className="border py-1 px-4  rounded-md"
                >
                    <option value="">Seçiniz</option>
                    {sortOptions.map((i, key) => (
                        <option value={i.value} key={key}>
                            {i.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex justify-end">
                <button
                    type="reset"
                    onClick={() => setParams({})}
                    className="p-1 px-4 text-white bg-blue-500 rounded-md w-fit"
                >
                    Filtreleri Temizle
                </button>
            </div>
        </form>
    );
};

export default Filter;
