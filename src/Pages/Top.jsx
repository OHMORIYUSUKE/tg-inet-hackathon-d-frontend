import Header from "../components/Header";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import Grid from "@mui/material/Grid";

function Top() {
  return (
    <>
      <Header pageName="トップページ" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ padding: "0 2em" }}
      >
        {Array.from(Array(24)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <PostCard
              name="スペースの名前"
              address="東京都港区浜松町２－３－１"
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default Top;
