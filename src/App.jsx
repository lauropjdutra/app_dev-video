import { useState, useEffect } from "react";

import { apiData } from "./api/data";
import axios from "axios";

import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { VideoDescription } from "./components/VideoDescription";
import { CarouselPosters as Carousel } from "./components/Carousel";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  const [video, setVideo] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const { imageLogo, title, description, linkSite, linkVideo, imageBanner } =
    video;

  const apiUse = movieData?.movies?.length > 0 ? movieData : apiData;

  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${baseUrl}/all`);
      setMovieData(data);
      setVideo(data.movies[5]);
    };
    getData();
  }, []);

  const openVideo = () => setPlayVideo(true);
  const closeVideo = () => setPlayVideo(false);

  const changeVideo = (data) => {
    setVideo(data);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 600);
  };

  const createAll = async () => {
    await axios.post(`${baseUrl}/movie`, apiData?.movies);
  };

  return (
    <>
      <Video
        linkVideo={linkVideo}
        playVideo={playVideo}
        closeVideo={closeVideo}
      />
      <Background imageBanner={imageBanner}>
        <Header />

        <VideoDescription
          logo={imageLogo}
          title={title}
          description={description}
          site={linkSite}
          openVideo={openVideo}
        />

        <Carousel
          data={apiUse}
          changeVideo={(data) => changeVideo(data)}
          selected={title}
        />

        <Footer></Footer>
      </Background>
    </>
  );
}

export default App;