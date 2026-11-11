import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h4 class="text-uppercase text-color">
                    About Us
                  </h4>

                  <p className="header-logo-color">
                  Welcome to Rent and Ride, your go-to online car booking system designed 
                  for effortless trip planning. We simplify car rentals with a focus on efficiency
                   and seamless service. Our dedicated team ensures continuous improvement to meet
                    modern travel needs. Whether managing fleets or booking a ride, Rent and Ride 
                    makes every journey memorable. Embrace the freedom to wander, discover, and make 
                    unforgettablememories. Let's embark on this journey together. 
                    Welcome to our community!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second"></h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                       
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                       
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h4 class="text-uppercase text-color-second">Contact us</h4>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        8103177422
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        rentandride20@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second"></h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                  </ul>
                </div>

               <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second"></h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 custom-bg-text">
                  <b>Login from here</b>
                </span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    <b> Log in</b>
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center text-color">
            © 2024 Copyright:
            <a class="text-color-3" href="https://rentandride20@gmail.com/">
              rentandride20@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
