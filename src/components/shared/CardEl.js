import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {

    return (
        <Card sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
            {
                author.avatar &&
                <CardHeader
                    avatar={<Avatar src={author.avatar.url} />}
                    title={<Typography component="p" variant="p" fontWeight="500" color="text.secondary" mr={2}>
                        {
                            author.name
                        }
                    </Typography>}
                />
            }
            <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} />
            <CardContent>
                <Typography component="h6" variant="h6" color="text.primary">
                    {title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ margin: "10px" }} />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
                    <Button variant="outlined" size="large" sx={{ width: "100%", borderRadius: 2, margin: "0 0 5px" }}>مطالعه مقاله</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default CardEl;