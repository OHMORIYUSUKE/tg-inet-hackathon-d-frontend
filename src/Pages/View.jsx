import Header from "../components/Header";
import Footer from "../components/Footer";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

function View() {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Header pageName="詳細情報" />
      <div style={{ padding: "0 10em" }}>
        <Paper
          elevation={1}
          square
          style={{ maxWidth: "100vw", paddingBottom: "20px" }}
        >
          <div style={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              height="310"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <Typography
              component="h4"
              variant="h4"
              color="textPrimary"
              align="center"
              style={{ marginTop: "20px" }}
            >
              レンタルスペースの名前
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
              style={{ marginBottom: 7, marginTop: 7 }}
            >
              <BusinessIcon
                style={{ display: "inline-flex", verticalAlign: "middle" }}
              />
              所在地：東京都港区浜松町２－３－１
            </Typography>
            <div>
              {Array.from(Array(5)).map((_, index) => (
                <Paper variant="outlined" square>
                  hoge fuga さん 2021/11/27に xxxxxxxxを開催
                </Paper>
              ))}
            </div>
            <div style={{ padding: "0 10em", marginTop: "20px" }}>
              <Paper variant="outlined">
                <h3>予約入力</h3>
                <TextField
                  label="開催するイベント名"
                  id="outlined-size-normal"
                  style={{ width: "50%", margin: "10px" }}
                />
                <br />
                <Paper variant="outlined">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      orientation="landscape"
                      openTo="day"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Paper>
              </Paper>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "30px" }}>
              <Button variant="contained" size="large">
                予約
              </Button>
            </div>
          </div>
        </Paper>
      </div>
      <Footer />
    </>
  );
}

export default View;
