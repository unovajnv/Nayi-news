import PropTypes from "prop-types";
import React, { useEffect , useState} from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import {  ThreeDots } from  'react-loader-spinner'


const News =(props) =>{
  const [articles, setArticles]= useState([])
  const [loading, setLoadig] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  document.title = `${props.category} : Nayi-News`;
  

const updateNews= async ()=> {
    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoadig(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoadig(false)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  }, [])
  
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults);
    };
    return (
      <>
       
        <h2 className="d-flex justify-content-center">
          <b>Nayi-News : Top {props.category} Headlines </b>
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <div className="container, my-3 , d-flex justify-content-center">
            <ThreeDots
            height="80" 
            width="80" 
            radius="9"
            color="#b1004a" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             /></div>}
        >
          <div className="container d-flex align-items-center">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;


{
 // if we want to add button instead of infinite scroll


  /* <div className="row justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-danger"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}

         // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=c069ad7431a74216afe6aa9fbff4553a&page=${
  //     this.state.page - 1
  //   }&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //   });
  // };
  // handleNextClick = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=c069ad7431a74216afe6aa9fbff4553a&page=${
  //       this.state.page + 1
  //     }&pageSize=${props.pageSize}`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //     });
  //   }
  // };