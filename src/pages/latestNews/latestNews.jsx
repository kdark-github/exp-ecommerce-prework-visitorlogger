import React, { Component } from 'react';
import "./latestNews.css";
import NewsCard, { NewsCardSkeleton } from '../../component/news-card/news-card.component';



class LatestNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            searchTopic: "bitcoin",
            index: null,
            page: 1,
            loading: true,
            totalResults: undefined
        }

        this.fetchNews = this.fetchNews.bind(this);
        this.setindex = this.setindex.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.searchNewsForTopic = this.searchNewsForTopic.bind(this);
    }


    componentDidMount() {
        this.fetchNews();
        window.scrollTo(0, 0);
    }

    fetchNews() {

        let { page, searchTopic } = this.state;
        let url = `https://newsapi.org/v2/everything?apiKey=1848b5465b1449d78d10c2991b1bea98&from=2021-02-05&q=${searchTopic}&page=${page}`

        fetch(url)
            .then(res => { if (res.ok) { return res.json() } else throw new Error("Error fetching NEWS data.") })
            .then(data => {
                if (data.status === "ok") {
                    console.log("The news data is ", data);
                    this.setState((ps, pp) => ({
                        loading: false,
                        page: ps.page + 1,
                        newsList: [...ps.newsList, ...data.articles],
                        totalResults: data.totalResults
                    }))
                }
            })
            .catch(error => {
                this.setState((ps, pp) => ({
                    loading: false,

                }))
                console.error("Error Occured while fetching news.");

            })

        this.setState({
            loading: true
        })
    }


    setindex(indx) {
        let index = this.state.index;
        if (index === indx) {
            index = null
        } else {
            index = indx
        }
        this.setState({
            index
        })
    }

    handleChanges(event) {
        let { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }


    searchNewsForTopic(event) {

        event.preventDefault();
        this.setState({
            newsList: [],
            page: 1
        }, this.fetchNews)
    }

    loadMore = event => {

        this.fetchNews();
        event.target.scrollIntoView();
    }

    render() {
        const { newsList, index, searchTopic, loading, totalResults } = this.state;

        if(!!!Array.isArray(newsList)) return <div className="errored-news-data">Error In getting Data</div>
        if(newsList.length === 0 && !loading) return <div className="no-news-data">Can't find any NEWS for searched topic.</div>
        return (
            <div>
                <div className="new-searchbar-ctn">
                    <form onSubmit={this.searchNewsForTopic}>
                        <input
                            required
                            className="new-searchbar-ip"
                            id="ln-serach"
                            name="searchTopic"
                            onChange={this.handleChanges}
                            placeholder="Search your topic..."
                            value={searchTopic}
                        />
                        <button type="submit" >Search</button>
                    </form>
                </div>
                <div style={{ color: 'red', fontSize: '15px', margin: '2px auto', textAlign: 'center' }}>{searchTopic ? "" : "Search can't be blank."}</div>

                <div style={{ padding: '20px 0px 0px 0px' }}>
                    {
                        newsList
                            .map(
                                (news, idx) =>
                                    <NewsCard
                                        key={idx}
                                        onClick={() => this.setindex(idx)}
                                        value={news}
                                        expand={index === idx}
                                    />
                            )
                    }
                </div>
                {
                    (!loading && newsList.length < totalResults) && <div onClick={this.loadMore} className="loadmore">Click to load more.</div>
                }
                {
                    loading &&

                    <>
                        <NewsCardSkeleton />
                        <NewsCardSkeleton />
                        <NewsCardSkeleton />
                        <NewsCardSkeleton />
                        <NewsCardSkeleton />

                    </>
                }
            </div>
        );
    }
}

export default LatestNews;