import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";


function BlogPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { loading, data, error } = useQuery(GET_BLOG_INFO, {
        variables: {
            slug
        }
    })
    
    if (loading) return <Loader />;
    else if (error) return <h4>error ...</h4>
    else {
        return (
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} mt={9} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography component="h2" variant="h4" color="primary" fontWeight="700">
                            {data.post.title}
                        </Typography>
                        <ArrowBackRoundedIcon onClick={() => navigate(-1)} color="primary" />
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <img src={data.post.coverPhoto.url} alt={data.post.slug} width="100%" style={{ borderRadius: 15 }} />
                    </Grid>
                    <Grid item xs={12} mt={5} display="flex" alignItems="center">
                        <Link to={`/authors/${data.post.author.slug}`} style={{ textDecoration: "none" }}>
                            <Avatar src={data.post.author.avatar.url} alt={data.post.author.slug} sx={{ width: "70px", height: "70px" }} />
                        </Link>
                        <Box component="div" mr={2}>
                            <Link to={`/authors/${data.post.author.slug}`} style={{ textDecoration: "none" }}>
                                <Typography component="h5" variant="h5" fontWeight={700} color="text.primary">{data.post.author.name}</Typography>
                            </Link>
                            <Typography component="p" variant="p" fontWeight={500} color="text.secondary">{data.post.author.field}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mt={5}>
                        <div
                            dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.post.content.html) }}
                        ></div>
                    </Grid>
                    <Grid item xs={12}>
                        <CommentForm slug={slug} />
                    </Grid> 
                    <Grid item xs={12}>
                        <Comments slug={slug} />
                    </Grid> 
                </Grid>
            </Container>
        );
    }
}

export default BlogPage;