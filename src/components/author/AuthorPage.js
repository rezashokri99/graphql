import { useQuery } from "@apollo/client";
import { Avatar, Card, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";


function AuthorPage() {
    const { slug } = useParams();

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
        variables: {
            slug
        }
    })
    
    if (loading) return <Loader />;
    else if (error) return <h4>error ...</h4>
    else {
        return (
            <Container maxWidth="lg">
                <Grid container mt={10}>
                    <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                        <Avatar src={data.author.avatar.url} sx={{ width: "250px", height: "250px" }} />
                        <Typography component="h3" variant="h5" fontWeight="700" mt={4}>
                            {data.author.name}
                        </Typography>
                        <Typography component="p" variant="h6" color="text.secondary">
                            {data.author.field}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={5}>
                        <div
                            dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.author.description.html) }}
                        >
                        </div>
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <Typography component="h5" variant="h5" fontWeight="600">مقالات {data.author.name}</Typography>
                        <Grid container padding={2} spacing={2}>
                            {
                                data?.author.posts.map((post) => (
                                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                                        <CardEl title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} author={data.author.name} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default AuthorPage;