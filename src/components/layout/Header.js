import { AppBar, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              وبلاگ
            </Link>
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}