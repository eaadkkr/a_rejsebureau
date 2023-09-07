import video from "../assets/video.mp4";

export default function HjemPage() {
    return (
        <section className="hjemSection">
            <h1 className="pageTitle">Hjem</h1>
            <p className="hjemTxt">Velkommen til Et Rejsebureau!</p>
            <video src={video} controls className="video"></video>
        </section>
    )
}