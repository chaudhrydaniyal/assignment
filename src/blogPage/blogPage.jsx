import axios from "axios";
import "./blogPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  // state for storing blog data
  let [blog, setBlog] = useState(null);

  // getting id of blog from url
  const { id } = useParams();

  useEffect(() => {
    //fetching blog data
    axios
      .get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
      .then(function (response) {
        // handle success
        setBlog(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    blog && (
      <div className="blog">
        <h3>{blog.Title}</h3>
        <p className="blogSubtitle">{blog.Subtitle}</p>
        <img className="blogImg" src={`${blog.Image}`}></img>
        <p>{blog.Article}</p>
      </div>
    )
  );
}
