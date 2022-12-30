import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries"
import Grid from '@mui/material/Grid'
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

function Blogs() {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO);
    
    if (loading) return <Loader />;
    else if (error) return <h4>error ...</h4>
    else {
        return (
            <Grid container spacing={2}>
                {
                    data?.posts.map((post) => (
                        <Grid key={post.id} item xs={12} sm={6} md={4 }>
                            <CardEl {...post} />
                        </Grid>
                    ))
                }

            </Grid>
        );
    }
}

export default Blogs;