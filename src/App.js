import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className="container-fluid page-container">
        <div className="row line-first"></div>
        <Header />
        <div className = "row navi-bar">
            <div className = "col-md-4 logo-container">
                <img src="./logo.png" alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>
            </div>
            <div className = "col-md-8 menu-navi-container">
              <div className = "menu-navi">
                <div className = "nav-item" style ={{color: "white"}}>HOME</div>
                <div className = "nav-item">STYLE DEMO</div>
                <div className = "nav-item">FULL WIDTH</div>
                <div className = "nav-item">DROPDOWN</div>
                <div className = "nav-item">GALLERY</div>
              </div>
              <div className="collapse navbar-collapse bg-dark" id="collapsibleNavbar">
                <div className = "nav-item">HOME</div>
                <div className = "nav-item">STYLE DEMO</div>
                <div className = "nav-item">FULL WIDTH</div>
                <div className = "nav-item">DROPDOWN</div>
                <div className = "nav-item">GALLERY</div>
              </div>
            </div>
        </div>
        <div className = "intro row">
            <div className = "intro-image-container col-md-8">
                <div className = "intro-image">
                  610 x 360px
                </div>
            </div>
            <div className = "intro-des-container col-md-4">
                <div className = "intro-title">Aliquatjusto quisque</div>
                <div className = "intro-des">Inteligula congue id elis donec sce sagittis intes id laoreet aenean. Massawisi condisse leo sem ac tincidunt nibh quis dui fauctor et. Donecnibh elis velit tincidunt volutpat elit quismodo tellentum commod sentes laorem. Vivamuslibero augue sed rutrum sem elerit fusce pede feugiat at orci. Turgravida cursus sed convallicitur morbi nam cursuspenatis pede nisl nonummy pellentum.</div>
                <div className = "intro-continue">Continue Reading »</div>
            </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide row" style = {{backgroundColor: "rgb(242, 242, 242)"}} data-ride="carousel">
          <img src="./top-gradient.png" alt="" className = "gradient" />
          <a className="carousel-control-prev col-md-1" href="#carouselExampleControls" role="button" data-slide="prev">
            <div className="carousel-control-prev-icon" aria-hidden="true"></div>
            <div className="sr-only">Previous</div>
          </a>
          <div className="carousel-inner slogan-container">
            <div className="carousel-item active">
              <div className = "d-block w-100 slogan-text">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque „
              </div>
            </div>
            <div className="carousel-item slogan-text">
              <div className = "d-block w-100">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque „
              </div>
            </div>
            <div className="carousel-item slogan-text">
              <div className = "d-block w-100">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque „
              </div>
            </div>
          </div>
          <a className="carousel-control-next col-md-1" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <img src="./top-gradient.png" alt="" className = "gradient"/>
        </div>
        <div className = "slider-container row">
          <div className = "col-md-4 slide-item">
            <div className = "slide-item-center">
              <div className = "slider-title">
                Metuervestas mus lacinia
              </div>
              <div className = "slider-img"> 
                290 x 120px
              </div>
              <div className = "slider-des">
                Convallisijusto vestas mus pellentum aenean sapibulum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce
              </div>
              <div className = "slider-continue">
                Continue Reading »
              </div>
            </div>
          </div>
          <div className = "col-md-4 slide-item">
            <div className = "slider-title">
              Metuervestas mus lacinia
            </div>
            <div className = "slider-img"> 
              290 x 120px
            </div>
            <div className = "slider-des">
              Convallisijusto vestas mus pellentum aenean sapibulum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce
            </div>
            <div className = "slider-continue">
              Continue Reading »
            </div>
          </div>
          <div className = "col-md-4 slide-item">
            <div className = "slider-title">
              Metuervestas mus lacinia
            </div>
            <div className = "slider-img"> 
              290 x 120px
            </div>
            <div className = "slider-des">
              Convallisijusto vestas mus pellentum aenean sapibulum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce
            </div>
            <div className = "slider-continue">
              Continue Reading »
            </div>
          </div>  
        </div>
        <div style = {{border: "1px solid #8e8f8a"}} className = "row"></div>
        <div className = "footer row">
          <div className = "col-md-6 about-us-container">
            <div className="about-us">About Us</div>
            <div className = 'about-us-item'>
              <div className = "about-us-img-border">
                <div className = "about-us-img">95 x 95px</div>
              </div>
              <div className = "about-us-content">
                <div className = "about-us-title">Metuervestas mus lacinia</div>
                <div className = "about-us-des">Convallisijusto vestas mus pellentum aeneansa pibu lum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce at elis ut vitae laorem.</div>
              </div>
            </div>
            <div className = 'about-us-item'>
              <div className = "about-us-img-border">
                <div className = "about-us-img">95 x 95px</div>
              </div>
              <div className = "about-us-content">
                <div className = "about-us-title">Metuervestas mus lacinia</div>
                <div className = "about-us-des">Convallisijusto vestas mus pellentum aeneansa pibu lum in aliquam volut pat integest nulla. Acsed sed nunc at fring maurisusce at elis ut vitae laorem.</div>
              </div>
            </div>
          </div>
          <div className = "col-md-3">
            <div className="contact-us">Contact Us</div>
            <form>
              <div className="form-group">               
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div className="form-group">          
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
          <div className = "col-md-3">
            <div className="quick-links">Quick Links</div>
              <div className = "links">
                <div className="link">Lorem ipsum dolor sit</div>
                <div className = "link">Amet consectetur</div>
                <div className = "link">Praesent vel sem id</div>
                <div className = "link">Curabitur hendrerit est</div>
                <div className = "link">Aliquam eget erat nec sapien</div>
                <div className = "link">Cras id augue nunc</div>
                <div className = "link">In nec justo non</div>
                <div className = "link">Vivamus mollis enim ut</div>
                <div className = "link">Sed a nulla urna</div>
              </div>
          </div>
        </div>
        <div className = "page-bottom row">
          <div>Copy right @ 2013 Domain Name - All Rights Reserved</div>
          <div>Template by OS Templates</div>
        </div>
    </div>
    </div>
  );
}

export default App;
