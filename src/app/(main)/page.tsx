"use client"
import { AppBar, Box, IconButton, Paper, Stack, Toolbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CarForm from "@/components/car-form";
import { useState, useContext, useRef } from "react";
import ChecklistIcon from '@mui/icons-material/Checklist';
import CarsContainer from "@/data/car-container";
import CarListModal from "@/components/car-list-modal";


export default function Main() {
    const [modal,showModal] = useState(false)
    const [data,setData] = useState<CarsContainer>()
    const appendRef = useRef<Function>();
    const handleFormSubmit = (data: CarsContainer) => {
        setData(data)
    }

    const handleModal = () =>{
        showModal(!modal)
    }

    return (
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}>
                <AppBar position="sticky" sx={{bgcolor: "#ffff", boxShadow: "none", width: "100%"}}>
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <Typography variant="h5" style={{color: 'black'}}>
                            Car List
                        </Typography>
                        <Stack direction="row">
                            <IconButton onClick={() => {handleModal()}}>
                                <ChecklistIcon fontSize="large" />
                            </IconButton>
                            <IconButton onClick={() => appendRef.current?.()}>
                                <AddIcon fontSize="large"/>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>

                <CarForm onSubmit={handleFormSubmit} appendRef={appendRef}/>
                <CarListModal open={modal} onClose={handleModal} data={data?.cars ?? []}/>
            </Box>
    );
}
