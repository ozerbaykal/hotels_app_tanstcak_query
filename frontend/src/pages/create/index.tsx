import { Field, Form, Formik } from "formik"
import Container from "../../components/container"
import { initial, inputs } from "../../constants"
import { PlaceData } from "../../types"
import { useMutation } from "@tanstack/react-query"
import { createPlace } from "../../api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Create = () => {
    const navigate = useNavigate()

    const { isPending, mutate } = useMutation({

        mutationFn: (body: PlaceData) => createPlace(body),

        onSuccess: (res) => {
            toast.success("Konaklama Noktası Oluşturuldu")
            navigate(`/place/${res.data.place.id}`)
        },

        onError: () => {
            toast.error("işlem başarısız oldu")
        }

    })

    const handleSubmit = (values: PlaceData) => {

        //kopyasını oluştur
        const body = { ...values };

        //özellikler metnini (,) göre diziye çevir
        body.amenities = (values.amenities as string).split(",");

        //apiye istek at
        mutate(body)





    }


    return (
        <Container>
            <Formik initialValues={initial} onSubmit={handleSubmit}>
                <Form className="max-w-2xl mx-auto grid gap-5" >
                    {inputs.map((item, key) => (
                        <div key={key} className="flex flex-col gap-3">
                            <label className="font-bold">{item.label}</label>
                            <Field
                                type={item.type || "text"}
                                name={item.name}

                                className="border py-1 px-4 rounded-e-md shadow w-full" />

                        </div>

                    ))}


                    <button className="my-5 bg-blue-500 py-2 px-6 transition font-bold text-white rounded-md hover:bg-blue-600" type="submit">Gönder</button>

                </Form>






            </Formik>


        </Container>
    )
}

export default Create