import {Backdrop, Box, Fade, Modal, Paper, Stack, Typography} from "@mui/material";
import CarsContainer from "@/data/car-container";
import {Car} from "@/data/car";


interface Props{
    open: boolean
    onClose: () => void
    data: Car[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const CarListModal = (props: Props) =>{
    const {open, onClose, data} = props
    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    {data.map((item,index) =>{
                        return(
                            <Stack direction="column">
                                <Typography id="transition-modal-title" variant="h6"  fontWeight="bold" component="h2">
                                    Car {index + 1}
                                </Typography>
                                <Typography id="transition-modal-title" variant="subtitle1">
                                    {item.brand}
                                </Typography>
                                <Typography id="transition-modal-title" variant="subtitle1">
                                    {item.model}
                                </Typography>
                                <Typography id="transition-modal-title" variant="subtitle1">
                                    {item.year}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Box>
            </Fade>
        </Modal>
    );
}

export default CarListModal;