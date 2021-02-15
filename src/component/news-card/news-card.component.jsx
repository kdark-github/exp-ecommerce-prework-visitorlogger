import React from 'react';
import './news-card.styles.css';
import Skeleton from '@material-ui/lab/Skeleton';



const NewsCard = ({ value, onClick = () => { }, expand, ...props }) => {

    const toDate = () => {

        try {
            var t = new Date(value.publishedAt);
            return t.toLocaleString()
        }
        catch (error) {
            console.error("Error converting string ", error);

        }
    }
    return (
        <div className="News-card-main-ctn" onClick={onClick}>
            <div className="News-card-det-ctn">
                <div className="News-card-det">
                    <div>{value?.source?.name}</div>
                    <h2>{value.title}</h2>
                    <article>{value.description}</article>

                </div>

                <div style={{ backgroundImage: `url(${value.urlToImage})`, width: 200, height: 200 }}>

                </div>
            </div>
            <div className="card-footer">
                <div style={{ fontStyle: "italic" }}>Published on&nbsp;{toDate()}</div>
                <div > Click to Expand</div>
            </div>


            <article className={expand ? "news-content-visible" : "news-content-hide"}>

                {value.content}
                <a
                    className="news-link"
                    href={value.url}
                    onClick={e => e.stopPropagation()}
                    target="_blank"
                > View full news</a>
            </article>

        </div>
    );
};


export const NewsCardSkeleton = () => <div className="News-card-main-ctn" >
    <div className="News-card-det-ctn">
        <div className="News-card-det">
            <div><Skeleton variant="text" style={{ width: "150px" }} /></div>
            <h2><Skeleton variant="text" style={{ width: "97%" }} /></h2>
            <article>
                <Skeleton variant="text" style={{ width: "90%" }} />
                <Skeleton variant="text" style={{ width: "70%" }} />
                <Skeleton variant="text" style={{ width: "96%" }} />
                <Skeleton variant="text" style={{ width: "90%" }} />
                <Skeleton variant="text" style={{ width: "50%" }} />
            </article>
            <div><Skeleton variant="text" style={{ width: "90px" }} /></div>
        </div>

        <Skeleton variant="rect" style={{ width: 200, height: 200 }} />
    </div>

</div>
export default NewsCard;