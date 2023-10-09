import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footerText">
                <h4>Shipping</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="footerText">
                <h4>Contact Us</h4>
                <ul>
                    <li>
                        <p>Phone:
                            *phone number*
                        </p>
                    </li>
                    <li>
                        Mail: genericmail@gmail.com
                    </li>
                </ul>
            </div>

            <div className='footerText'>
                <h4>Images Sources</h4>
                <ul>
                    <li>
                        <p>Photo by <a href="https://unsplash.com/@saarteaga?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sergio Arteaga</a> on <a href="https://unsplash.com/photos/a-small-dog-wearing-a-colorful-outfit-sitting-on-the-ground-aOIbuJRbOTk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Photo by <a href="https://unsplash.com/@karsten116?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karsten Winegeart</a> on <a href="https://unsplash.com/photos/qy0BHykaq0E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Photo by <a href="https://unsplash.com/@pearllynn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pearl Lynn</a> on <a href="https://unsplash.com/photos/4eHku-Br1qQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="https://www.freepik.com/icons/shopping-cart">Shopping cart by Freepik</a>
                        </p>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer