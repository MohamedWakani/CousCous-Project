import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
         {/* <!-- Footer Start --> */}
         <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>Our Address</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>123 Street, Casablanca, Morocco</p><br />
                                    <p><i class="fa fa-phone-alt"></i>+212 684 750 243</p><br />
                                    <p><i class="fa fa-envelope"></i>aloCouscous@gmail.com</p><br />
                                    <div class="footer-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. <br /> Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus,  <br /> lorem quam iaculis felis, sed lacus neque id eros.
                            </p><br />
                            <div class="form">
                                <input class="input" placeholder="Email goes here"/>
                                <button class="btn custom-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    <p>Copyright &copy; <a href="#">Alo CousCous</a>, All Right Reserved.</p>
                    <p>Designed By <a href="https://htmlcodex.com">Stagiaire De Ofppt</a></p>
                </div>
            </div>
        </div>
        <button className='back-top'><a href="#"  class="back-to-top"><i class="fa fa-chevron-up"></i></a></button>

      </div>
    )
  }
}
