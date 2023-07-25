import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
    props;
    return (
      <div className="my-3 d-flex justify-content-center ">
        <div className="card" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://clickpakistan.org/wp-content/uploads/2021/06/Main-image1-min.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title ">{title}.. </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
