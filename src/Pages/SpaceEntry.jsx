import Header from "../components/Header";
import Footer from "../components/Footer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

function SpaceEntry() {
  return (
    <>
      <Header pageName="レンタルスペースを登録" />
      <div style={{ padding: "0 10em" }}>
        <Paper
          elevation={1}
          square
          style={{ maxWidth: "100vw", paddingBottom: "20px" }}
        >
          <div style={{ textAlign: "center" }}>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
                <h5>画像をアップロード</h5>
              </IconButton>
            </label>
            <br />
            <TextField
              label="名前"
              id="outlined-size-normal"
              style={{ width: "50%", margin: "10px" }}
            />
            <br />
            <TextField
              label="住所"
              id="outlined-size-normal"
              style={{ width: "50%", margin: "10px" }}
            />
            <div style={{ margin: "30px" }}>
              <Button variant="contained" size="large">
                登録
              </Button>
            </div>
          </div>
        </Paper>
      </div>
      <Footer />
    </>
  );
}

export default SpaceEntry;
