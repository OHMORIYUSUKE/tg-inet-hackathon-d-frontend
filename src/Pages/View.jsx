import Header from "../components/Header";
import Footer from "../components/Footer";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

import axios from "axios";
import { useHistory } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function View() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let history = useHistory();
  let { id } = useParams();

  const [start, setStart] = React.useState(new Date());
  console.log(start);

  const [end, setEnd] = React.useState(new Date());
  console.log(end);

  const [post, setPost] = useState([]);
  const [post2, setPost2] = useState([]);
  console.log(post2);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:5000/place/${id}`);
        setPost(res.data);

        const res2 = await axios.get(`http://localhost:5000/lend/${id}`);
        setPost2(res2.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  console.log(post);
  console.log(id);

  function submit() {
    const inputElementEventName = document.getElementById("textareaEventName");
    const inputValueEventName = inputElementEventName.value;

    const inputElementDescription = document.getElementById(
      "textareaDescription"
    );
    const inputValueDescription = inputElementDescription.value;

    const inputElementEvent_url = document.getElementById("textareaEvent_url");
    const inputValueEvent_url = inputElementEvent_url.value;

    if (inputValueEventName === "") {
      window.alert("イベント名が入力されていません");
      return;
    }
    if (inputValueDescription === "") {
      window.alert("イベントの詳細が入力されていません。");
      return;
    }
    if (inputValueEvent_url === "") {
      window.alert("イベントの詳細ページのURLが入力されていません。");
      return;
    }

    console.log(inputValueEventName);
    console.log(start);
    console.log(end);

    window.alert(
      inputValueEventName +
        "\n" +
        start.getFullYear() +
        (start.getMonth() + 1) +
        start.getDate() +
        "\n" +
        end.getFullYear() +
        (end.getMonth() + 1) +
        end.getDate()
    );
    axios
      .post(
        "http://localhost:5000/reserve",
        {
          place_id: id,
          begin_date:
            start.getFullYear() +
            "-" +
            (start.getMonth() + 1) +
            "-" +
            start.getDate() +
            " " +
            "00:00:00",
          end_date:
            end.getFullYear() +
            "-" +
            (end.getMonth() + 1) +
            "-" +
            end.getDate() +
            " " +
            "00:00:00",
          purpose: inputValueEventName,
          description: inputValueDescription,
          event_url: inputValueEvent_url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.alert("投稿が完了しました。");
        history.push("/");
      })
      .catch((error) => {
        console.log("Error : " + JSON.stringify(error.response));
        window.alert("投稿に失敗しました。");
      });
  }

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
              image={post.image_url}
              alt={post.image_url}
            />
            <Typography
              component="h4"
              variant="h4"
              color="textPrimary"
              align="center"
              style={{ marginTop: "20px" }}
            >
              {post.title}
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
              所在地：{post.address}
            </Typography>
            <div>
              {post2.map((data) => (
                <>
                  <Paper
                    onClick={handleOpen}
                    variant="outlined"
                    square
                    style={{
                      padding: "10px",
                      cursor: "hand",
                      cursor: "pointer",
                    }}
                  >
                    {data.begin_date} ～ {data.end_date} {data.purpose}を開催
                  </Paper>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {data.purpose}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {data.description}
                      </Typography>
                      <a href={data.event_url}>イベント詳細ページ</a>
                    </Box>
                  </Modal>
                </>
              ))}
            </div>
            <div style={{ padding: "0 10em", marginTop: "20px" }}>
              <Paper variant="outlined">
                <h3>予約入力</h3>
                <TextField
                  label="開催するイベント名"
                  id="textareaEventName"
                  style={{ width: "50%", margin: "10px" }}
                />
                <br />
                <TextField
                  label="開催するイベントの詳細"
                  id="textareaDescription"
                  style={{ width: "50%", margin: "10px" }}
                />
                <br />
                <TextField
                  label="開催するイベントの詳細ページURL"
                  id="textareaEvent_url"
                  style={{ width: "50%", margin: "10px" }}
                />
                <br />
                <Paper variant="outlined">
                  <h4>開始日</h4>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      orientation="landscape"
                      openTo="day"
                      value={start}
                      onChange={(newValue) => {
                        setStart(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Paper>
                <Paper variant="outlined">
                  <h4>終了日</h4>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      orientation="landscape"
                      openTo="day"
                      value={end}
                      onChange={(newValue) => {
                        setEnd(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Paper>
              </Paper>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "30px" }}>
              <Button variant="contained" size="large" onClick={submit}>
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
