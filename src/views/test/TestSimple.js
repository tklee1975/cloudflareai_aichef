import {
    Container,
    Typography,
    Box,
    Stack,
} from "@mui/material";
import React from 'react';

export default function TestSimple() {
    // Getting the environment variables
    const { REACT_APP_NAME } = process.env;

    return (
        <Container maxWidth="lg">
            <Stack direction="column">
                <Typography variant="h3">Test Simple</Typography>

                <Typography variant="h4">Typography h4</Typography>
                <Typography variant="p">
                    AppName: {REACT_APP_NAME}
                </Typography>

            </Stack>
        </Container>
    )
}
