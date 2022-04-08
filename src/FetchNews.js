import React, { useState } from "react";
import axios from "axios";

function FetchNews() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c8ac482ab8384b8fbda5370291f55757"
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(res)
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-danger" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container" >
        <div className="row">
          {
              news.map(value => {
                  return (
                    <div className="col-sm" style={{width: "100%"}}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={value.urlToImage} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} className="btn btn-danger">Read Article</a>
                      </div>
                    </div>
                  </div>
                  )
              })
          }
        </div>
      </div>
    </>
  );
}

export default FetchNews;
