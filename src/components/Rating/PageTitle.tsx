import React from "react";
type PageTitleType = {
    title: string;
}

function PageTitle(props: PageTitleType) {
    return <h2>{props.title}</h2>
}

export default PageTitle;