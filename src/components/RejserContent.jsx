// Komponent til indhold fra WordPress.

// For at kunne læse html-koden fra vores JSON-side:
// I terminal: npm i html-react-parser

import parse from "html-react-parser";

export default function RejserContent( { post } ) {

    // default billede
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="rejserArticle">
            <img src={image} alt={post.title.rendered} className="rejserImg" />
            <h2 className="rejserHeader">{parse(post.title.rendered)}</h2>
            <p className="rejserTxt">{parse(post.content.rendered)}</p>
        </article>
    )
}