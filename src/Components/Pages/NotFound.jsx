import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="error-404 not-found">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <div class="page-404">
                        <img src="https://crafted.email/wp-content/themes/email_agency/images/Asset%20404.png" alt="404 logo" srcset="" width="296" height="auto" />
                        <p>The page you're looking for <br/> is no longer available.</p>
                        <Link to="/">GO BACK <span>►</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
};

export default NotFound;