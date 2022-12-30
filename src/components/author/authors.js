import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";

function Authors() {
    const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

    if (loading) return <Loader />;
    else if (error) return <h4>error ...</h4>
    else {
        return (
            <Grid container sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }} >
                {
                    data?.authors.map((author, index) => (
                        <Fragment key={author.id}>
                            <Grid item xs={12} padding={2}>
                                <Link to={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                                    <Avatar src={author.avatar.url} alt={author.slug} />
                                    <Typography component="p" variant="p" color="text.secondary" mr={2}>
                                        {author.name}
                                    </Typography>
                                </Link>
                            </Grid>
                            {
                                index !== data.authors - 1 &&
                                <Grid item xs={12}>
                                    <Divider variant="middle" />
                                </Grid>
                            }
                        </Fragment>
                    ))
                }
            </Grid>
        );
    }
}

export default Authors;