import { useState, useEffect } from "react";
import { apiData } from "./api/data";
import axios from "axios";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { VideoDescription } from "./components/VideoDescription";
import { CarouselPosters as Carousel } from "./components/Carousel";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true)
  const [playVideo, setPlayVideo] = useState(false);
  const [video, setVideo] = useState([]);
  const [movieData, setMovieData] = useState([]);
  
  const { imageLogo, title, description, linkSite, linkVideo, imageBanner } =
  video;
  
  const apiUse = movieData?.movies?.length > 0 ? movieData : apiData;
  
  const baseUrl = "https://api-dev-video.vercel.app";
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/all`);
        setVideo(data.movies[5]);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1750);
  }, []);
  
  if (loading) {
    return <LoadingSpinner />;
  }

  const openVideo = () => setPlayVideo(true);
  const closeVideo = () => setPlayVideo(false);

  const changeVideo = (data) => {
    setVideo(data);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 600);
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