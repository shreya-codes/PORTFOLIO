import React from "react";

export default function SectionTitle({
    heading="Heading",
    highlight="highlight"
}){
    return(
        <div className="heading">
            <h2> {heading} <span className="highlight">{highlight}</span> </h2>
        </div>
    )
}