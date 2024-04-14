import {
    Container,
    Typography,
    Box,
    Stack,
} from "@mui/material";
import React from 'react';

export default function TestSimple() {
    return (
        <Container maxWidth="lg">
            <Stack direction="column">
                <Typography variant="h3">Test Simple</Typography>

                <Typography variant="h4">Typography h4</Typography>
            </Stack>
        </Container>
    )
}
