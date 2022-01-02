import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Loader from "./Loader";
import axios from "axios";
import { apiKey } from "../config";

const Container = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Something went wrong with the Flickr API call. Please try again later.",
          error
        );
      });
  };

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
