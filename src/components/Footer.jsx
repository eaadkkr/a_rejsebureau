// Ikoner: https://mui.com/material-ui/material-icons/?query=linked 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerCard'>
                <h2>Adresse</h2>
                <address>
                    Ringvej Syd 104 <br />
                    8260 Viby J <br />
                    Danmark
                </address>
            </div>

            <div className='footerCard'>
                <h2>Kontakt</h2>
                <p>Tel.: <a href="tel:#">12 34 56 78</a></p>
                <p>E-mail: <a href="mailto:#">rejse@bureau.dk</a></p>
            </div>

            <div className='footerCard'>
                <h2>Følg os</h2>
                <a href="https://www.facebook.com/"><FacebookIcon /> Facebook</a>
                <a href="https://www.instagram.com/"><InstagramIcon /> Instagram</a>
                <a href="https://www.youtube.com/"><YouTubeIcon /> Youtube</a>
            </div>
        </footer>
    )
}