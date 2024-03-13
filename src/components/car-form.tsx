import { Button, Card, Stack, TextField } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import CarsContainer from "@/data/car-container";
import { useEffect } from "react";


interface Props{
    onSubmit: (data: CarsContainer) => void;
    appendRef: React.MutableRefObject<Function | undefined>;
}

const CarForm = (props: Props) => {
    const { onSubmit,appendRef } = props
    const { register, handleSubmit,control }  = useForm<CarsContainer>();
    const {
        fields,
        append
    } = useFieldArray({
        control,
        name: "cars"
    });

    useEffect(() => {
        appendRef.current = () => append({ brand: "", model: "", year: "" });
    }, [appendRef, append]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" sx={{justifyContent: "center", alignItems: "center"}}>
            {fields.map((item, index) => {
                    return (

                            <Card
                                key={index}
                                sx={{
                                    boxShadow: "0",
                                    margin: 3,
                                    padding: 3,
                                    minWidth: "30%",
                                    bgcolor: "#fdfdfc",
                                    borderRadius: 5,
                                    border: 1,
                                    borderColor: "#f0ece1"
                                }}>

                                <Stack direction="column" gap={3}>
                                    <TextField {...register(`cars.${index}.brand`, {required: "*",})} label="Brand"/>
                                    <TextField {...register(`cars.${index}.model`,{required: "*",})} label="Model"/>
                                    <TextField {...register(`cars.${index}.year`)} label="Year"/>
                                </Stack>
                            </Card>

                    )
                }
            )}
                <Stack direction="row">
                    {fields.length != 0 && (
                        <Button type="submit">
                            Submit
                        </Button>
                    )}
                </Stack>
            </Stack>
        </form>
    );
}

export default CarForm;