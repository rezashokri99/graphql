import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";

function Comments({ slug }) {

    const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
        variables: {
            slug
        }
    })


    if (loading) return <Loader />;
    else if (error) return <h4>error ...</h4>
    else {
        return (
            <Grid
                container
                sx={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: 4,
                    py: 1,
                    mt: 8
                }}
            >
                <Grid item xs={12} m={2}>
                    <Typography component="h6" variant="h6" fontWeight={700} color="primary">کامنت ها</Typography>
                </Grid>
                {
                    data.comments.map((comment) => (
                        <Grid item xs={12} m={2} p={2} key={comment.id} border="1px solid silver" borderRadius={1}>
                            <Box component="div" display="flex" alignItems="center">
                                <Avatar>{comment.name[0]}</Avatar>
                                <Typography component="p" variant="p" fontWeight={700} mr={2}>{comment.name}</Typography>
                            </Box>
                            <Typography component="p" variant="p" mt={3} mr={1}>{comment.text}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}

export default Comments;