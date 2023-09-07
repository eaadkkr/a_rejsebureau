import { useEffect } from "react";
import { useState } from "react";
import RejserContent from "../components/RejserContent";


export default function RejserPage() {

     // Vi skal have indhold fra egen WordPress.

     const [posts, setposts] = useState([]);

     useEffect(() => {
         async function getPosts() {
 
             // const url = url'en fra hvor vi ser indlæggene i JSON format.
             // ?_embed&categories=4 for at vise indlæg med kategorinummer 4.
             const url = "https://wp.dkkristensen.dk/wp-json/wp/v2/posts?_embed&categories=8";
             const response = await fetch(url);
             const data = await response.json();
             setposts(data);
         }
         getPosts();
 
     // De tomme [] er for at stoppe useEffect, når den har kørt én gang. Ellers bliver den bare ved og ved.
     }, [])
 
     return (
         <section>
             <h1 className="pageTitle">Rejser</h1>
             {posts.map(post => (
                 <RejserContent key={post.id} post={post} />
             ))}
         </section>
     );

}
