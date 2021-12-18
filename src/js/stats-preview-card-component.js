'use strict';


const StatsCard = (props) => {
    if (!props || !props.value || !props.title) return null;
    return (
        <div className="StatsCard">
            <h3 className="value">{props.value}</h3>
            <span className="heading">{props.title}</span>
        </div>
    )
}

const StatsGroup = () => {
    return (
        <div className="StatsGroup">
            <StatsCard value="10k+" title="COMPANIES"/>
            <StatsCard value="314" title="TEMPLATES"/>
            <StatsCard value="12M+" title="QUERIES"/>
        </div>
    );
}

const InfoCard = () => {
    return (
        <div className="InfoCard">
            <h1>Get <span>insights</span> that help your business grow.</h1>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer
                experience, and overall efficiency.</p>
            {/* <div className="stats"> */}
                <StatsGroup />
            {/* </div> */}
        </div>
    )
}


const ImageHeader = () => {

    return (
        <div className="ImageHeader">
            <img alt="image header" />
        </div>
    )
}

const StatsPreviewCard = () => {
    
    return (
        <div className="StatsPreviewCard">
            <div className="first">
                <InfoCard />
            </div>
            <div className="second">

                <ImageHeader />
            </div>
        </div>
    )
}

const e = React.createElement;
const domContainer = document.querySelector('#root');
ReactDOM.render(e(StatsPreviewCard), domContainer);


  

//   10k + companies
// 314 templates
// 12m + queries