import { useMutation, } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CREATE_COMMENT } from "../../graphql/mutations";
import 'react-toastify/dist/ReactToastify.css';

function CommentForm({ slug }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [pressed, setPressed] = useState(false)

    const [sendComment, { loading, data, error }] = useMutation(CREATE_COMMENT, {
        variables: {
            name,
            email,
            text,
            slug
        }
    });
    const sendHanlder = () => {
        if (name && email && text) {
            sendComment()
            setPressed(true)
        } else {
            toast.warn(".لطفا تمامی فیلد ها را پر کنید", {
                position: "top-center"
            })
        }
    }
    if (data && pressed) {
        toast.success(".کامنت ارسال شد و منتظر تایید می باشد", {
            position: "top-center"
        })
        setName("")
        setEmail("")
        setText("")
        setPressed(false)
    }


    return (
        <Grid
            container
            sx={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: 4,
                py: 1,
                mt: 5
            }}
        >
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" fontWeight={700} color="primary">فرم ارسال کامنت</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="نام کاربری"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="ایمیل"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="متن کامنت"
                    variant="outlined"
                    multiline
                    sx={{ width: "100%" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                {
                    loading ?
                        <Button variant="contained" disabled>
                            در حال ارسال ...
                        </Button> :
                        <Button variant="contained" onClick={sendHanlder}>
                            ارسال
                        </Button>
                }

            </Grid>
            <ToastContainer />
        </Grid>
    );
}

export default CommentForm;