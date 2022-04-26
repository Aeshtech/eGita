export default function Footer() {
    return (
        <footer className="bg-success  text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center mt-5">
                        <h5>Wanna to Learn Full Stack Development</h5>
                        <p>If you liked what we do, so press a like button and If you also want to learn the dev than join our live classes weekends batch.  <a href="mailto:dev.aeshtech@gmail.com" className="btn btn-warning ms-2 p-1" role="button">Contact Us</a> </p>
                    </div>
                    <div className="col-md-6 text-center mt-5">
                        <h3 className="">Connect with me on</h3>
                        <div className="">
                            <a href="https://www.linkedin.com/in/Aeshtech/" title="Linkedin/Aeshtech" target="_blank" className="me-3" rel="noreferrer noopener">
                                <i className="fab fa-linkedin fa-2x text-light"></i>
                            </a>
                            <a href="https://www.instagram.com/aeshtech11/" title="Instagram/aeshtech11" target="_blank" className="me-3" rel="noreferrer noopener">
                                <i className="fab fa-instagram fa-2x text-light"></i>
                            </a>
                            <a href="https://github.com/Aeshtech" title="GitHub/Aeshtech" target="_blank" className="me-3" rel="noreferrer noopener">
                                <i className="fab fa-github text-light  fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/aeshtech" title="Twitter/Aeshtech" target="_blank" className="" rel="noreferrer noopener">
                                <i className="fab fa-twitter fa-2x text-light "></i>
                            </a>
                        </div>
                    </div>

                    <div className="col text-center my-5">
                        <b className="d-inline me-5">Powered By - <a href="https://aeshtech.com" target="_bkank" title="Aeshtech.com" rel="noreferrer noopener" className="text-light">Aeshtech</a></b>
                        <b >Made by <i className="fas fa-heart text-danger"></i></b>
                    </div>
                </div>
            </div>
        </footer>
    );
}