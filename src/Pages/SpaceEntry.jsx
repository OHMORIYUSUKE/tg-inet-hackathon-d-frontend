import Header from "../components/Header";
import Footer from "../components/Footer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import axios from "axios";

import { useHistory } from "react-router-dom";

function SpaceEntry() {
  let history = useHistory();
  function submit() {
    const inputElementSpaceName = document.getElementById("textareaSpaceName");
    const inputValueSpaceName = inputElementSpaceName.value;

    const inputElementImageURL = document.getElementById("textareaImageURL");
    const inputValueImageURL = inputElementImageURL.value;

    const inputElementAddress = document.getElementById("textareaAddress");
    const inputValueAddress = inputElementAddress.value;

    if (inputValueSpaceName === "") {
      window.alert("スペースの名前が入力されていません。");
      return;
    }
    if (inputValueImageURL === "") {
      window.alert("画像のURLが入力されていません。");
      return;
    }
    if (inputValueAddress === "") {
      window.alert("所在地が入力されていません。");
      return;
    }

    window.alert(
      inputValueImageURL + "\n" + inputValueSpaceName + "\n" + inputValueAddress
    );
    axios
      .post(
        "http://localhost:5000/registration",
        {
          title: inputValueSpaceName,
          address: inputValueAddress,
          image_url: inputValueImageURL,
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
      <Header pageName="レンタルスペースを登録" />
      <div style={{ padding: "0 10em" }}>
        <Paper
          elevation={1}
          square
          style={{ maxWidth: "100vw", paddingBottom: "20px" }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ padding: "10px" }}>
              貸し出したいスペースの情報を入力
            </h2>
            <TextField
              label="画像のURL"
              id="textareaImageURL"
              style={{ width: "50%" }}
            />
            <p>※ https://... の形で入力</p>
            <br />
            <TextField
              label="スペースの名前"
              id="textareaSpaceName"
              style={{ width: "50%" }}
            />
            <br />
            <TextField
              label="所在地"
              id="textareaAddress"
              style={{ width: "50%", margin: "10px" }}
            />
            <div style={{ margin: "30px" }}>
              <Button variant="contained" size="large" onClick={submit}>
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
