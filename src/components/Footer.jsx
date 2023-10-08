import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="Footer">
            <ul>
            <li>
                <div class="footer-text">
                    <h2>Shipping</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste obcaecati minima officiis,
                        quas earum vitae autem id aut officia enim pariatur perferendis et illum praesentium minus sunt
                        dolor molestiae!</p>
                </div>
            </li>
            <li>
                <div class="footer-text">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste obcaecati minima officiis,
                        quas earum vitae autem id aut officia enim pariatur perferendis et illum praesentium minus sunt
                        dolor molestiae!</p>
                </div>
            </li>
        </ul>
        </footer>
    )
}

export default Footer