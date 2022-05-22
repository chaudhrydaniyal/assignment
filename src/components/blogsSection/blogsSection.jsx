import axios from "axios";
import "./blogsSection.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incViews, initializeViews } from "../../redux/actions/viewsActions";
import { ReactComponent as ViewIcon } from "../../assets/viewIcon.svg";

export default function BlogsSection() {
  // state for storing all blogs
  let [blogs, setBlogs] = useState(null);

  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(6);

  // fetching data from redux
  const views = useSelector((state) => state.views);
  const dispatch = useDispatch();

  useEffect(() => {

    // fetching all blogs from api
    axios
      .get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
      .then(function (response) {
        // handle success
        setBlogs(response.data);

        // storing views for each blog in redux state

        if (views === 0) {


          // Deep copy of data received
          let data = JSON.parse(JSON.stringify(response.data));

          // removing extra fields from objects
          data.forEach((object) => {
            delete object["Title"];
            delete object["Subtitle"];
            delete object["Image"];
            delete object["Article"];

            object.views = 0;
          });

          dispatch(initializeViews(data));
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="blogsSection">
        {blogs &&
          blogs.slice(0, numberOfitemsShown).map((blog) => (
            <Link
              key={blog.id}
              to={`blog/${blog.id}`}
              className="link"
              onClick={() => {
                dispatch(incViews(blog.id));
                console.log(views);
              }}
            >
              <div className="blogsCard">
                <img
                  className="cardImg"
                  src={`${blog.Image}`}
                  alt="blog image"
                ></img>
                <div className="views">
                  <ViewIcon alt="view icon" /> &nbsp;{views[blog.id].views}{" "}
                  views
                </div>
                <h5>{blog.Title}</h5>
                <p className="blogSubtitle">{blog.Subtitle}</p>
              </div>
            </Link>
          ))}
      </div>
      {numberOfitemsShown === 6 && (
        <button
          className="loadMoreBtn"
          onClick={() => {
            setNumberOfItemsToShown(blogs.length - 1);
          }}
        >
          Load More
        </button>
      )}
    </React.Fragment>
  );
}
