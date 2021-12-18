'use strict';

var StatsCard = function StatsCard(props) {
    if (!props || !props.value || !props.title) return null;
    return React.createElement(
        "div",
        { className: "StatsCard" },
        React.createElement(
            "h3",
            { className: "value" },
            props.value
        ),
        React.createElement(
            "span",
            { className: "heading" },
            props.title
        )
    );
};

var StatsGroup = function StatsGroup() {
    return React.createElement(
        "div",
        { className: "StatsGroup" },
        React.createElement(StatsCard, { value: "10k+", title: "COMPANIES" }),
        React.createElement(StatsCard, { value: "314", title: "TEMPLATES" }),
        React.createElement(StatsCard, { value: "12M+", title: "QUERIES" })
    );
};

var InfoCard = function InfoCard() {
    return React.createElement(
        "div",
        { className: "InfoCard" },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Get ",
                React.createElement(
                    "span",
                    null,
                    "insights"
                ),
                " that help your business grow."
            ),
            React.createElement(
                "p",
                null,
                "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
            )
        ),
        React.createElement(
            "div",
            { className: "stats" },
            React.createElement(StatsGroup, null)
        )
    );
};

var ImageHeader = function ImageHeader() {

    return React.createElement(
        "div",
        { className: "ImageHeader" },
        React.createElement("img", { alt: "image header" })
    );
};

var StatsPreviewCard = function StatsPreviewCard() {

    return React.createElement(
        "div",
        { className: "StatsPreviewCard" },
        React.createElement(
            "div",
            { className: "first" },
            React.createElement(InfoCard, null)
        ),
        React.createElement(
            "div",
            { className: "second" },
            React.createElement(ImageHeader, null)
        )
    );
};

var e = React.createElement;
var domContainer = document.querySelector('#root');
ReactDOM.render(e(StatsPreviewCard), domContainer);