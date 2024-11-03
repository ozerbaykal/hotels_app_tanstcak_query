type Props = {
    info: string,
    retry: () => void,
};

const Error = ({ info, retry }: Props) => {
    return (
        <>
            <div className="mt-20 bg-red-500 text-white rounded-lg p-4 font-semibold text-center">
                <p className="mb-5"> Üzgünüz <span className="mx-2">:(</span> beklenmedik bir sorun oluştu</p>
                <p>{info}</p>
            </div>

            <div className="flex justify-center my-10 ">
                <button
                    onClick={retry}
                    className="border bg-amber-200 px-4 py-1 rounded-md hover:bg-zinc-300 transition">Tekrar dene</button>
            </div>
        </>
    )
}

export default Error