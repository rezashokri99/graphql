import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/authors";
import Blogs from "../blog/Blogs";

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid container mt={4} spacing={2}>
                <Grid item xs={12} md={3} padding={3}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700">نویسنده ها</Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9} padding={3}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700">مقالات</Typography>
                    <Blogs /> 
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;