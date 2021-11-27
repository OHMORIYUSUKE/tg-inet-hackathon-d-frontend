import Header from "../components/Header";
import Footer from "../components/Footer";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";

function View() {
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
              <Paper variant="outlined" square>
                hoge fuga さん
                <br />
                2021/12/27
                <br />
                xxxxxxxxのイベントを開催予定
              </Paper>
              <Paper variant="outlined" square>
                hoge fuga さん
                <br />
                2021/11/27
                <br />
                yyyyyyyyyyのイベントを開催
              </Paper>
              <Paper variant="outlined" square>
                hoge fuga さん
                <br />
                2021/11/27
                <br />
                xxxxxxxxのイベントを開催
              </Paper>
            </div>
            <div style={{ margin: "30px" }}>
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
