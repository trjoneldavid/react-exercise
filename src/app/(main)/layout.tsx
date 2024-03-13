import type { Metadata } from "next";
import { Box, Container, Stack } from "@mui/material";
import { revalidateTag } from 'next/cache'


export const metadata: Metadata = {
    title: "React Exercise",
    description: "Car listing",
};

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: "100vh"}} data-testid="dashboard-page-container">
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%" }} data-testid="dashboard-page-content">
                    <Box sx={{ gap: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                        <Box>
                            {children}
                        </Box>
                    </Box>
            </Box>
        </Container>
    );
}
