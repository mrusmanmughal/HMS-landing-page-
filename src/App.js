import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Components/Navbar";
import TabImg from "./assets/Images/laptop_img.png";
import infoimg from "./assets/Images/hms_artwork.png";
import SecurityIMg from "./assets/Images/security_ic.png";
import InvationIMg from "./assets/Images/innovation_ic.png";
import AccuracyImg from "./assets/Images/accuracy_ic.png";
import QualityIMg from "./assets/Images/quality_control_ic.png";
import TransparencyIMg from "./assets/Images/transparency_ic.png";
import CostImg from "./assets/Images/cost_effective_ic.png";
import ReliableImg from "./assets/Images/easy_reliable_ic.png";
import MedicalRImg from "./assets/Images/erm_ic.png";
import docImg from "./assets/Images/doctors_ic.png";
import PatientImg from "./assets/Images/patients_ic.png";
import HospitalImg from "./assets/Images/hospitals_ic.png";
import CitiesIMg from "./assets/Images/cities_ic.png";
import formIMg from "./assets/Images/demo_artwork.png";
import AddValueImg from "./assets/Images/add_value_artwork.png";
import Review1 from "./assets/Images/ahmad_hassan_avatar.png";
import Review2 from "./assets/Images/ali_raza_avatar.png";
import Review3 from "./assets/Images/asma_avatar.png";
import Review4 from "./assets/Images/marshmallow_avatar.png";
import Review5 from "./assets/Images/jennifer_avatar.png";

import Slider from "react-slick";
import "./App.css";
import { init } from "emailjs-com";
init("user_qL458AsCBLpum5wzU0ADn");
const App = () => {
  const [Show, setstate] = useState(true);
  // send email notification
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "HMSlive", e.target, "user_qL458AsCBLpum5wzU0ADn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setstate(!true);

    setTimeout(function () {
      setstate(true);
    }, 5000);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 5000,
    centerMode: true,
    variableWidth: false,
    focusOnSelect: true,
    touchMove: true,
  };
  return (
    <>
      <Navbar />

      {/* Main front page start here  */}

      <section className="Main_section">
        <div className="container-fluid ">
          <div className="container ">
            <div className="row">
              <div className="col-md-4 col-sm-12   m-2">
                <div className="my-5 py-5  ">
                  <h1 className="text-white  display-6 fw-bold">
                    Optimize Healthcare
                    <br /> Operations with us
                  </h1>

                  <h3 className=" lh-base  text-light  d-none d-md-block  my-5 lead">
                    A world-class software that is intuitive, verstile,
                    <br /> secure and efficient enough to empower your
                    hospital's services digitally{" "}
                  </h3>
                  <form className="form-inline    my-lg-0">
                    <button
                      className="btn btn-outline-light  Button-radius  px-4  my-sm-0"
                      type="submit"
                      href="#contact"
                    >
                      Request Demo
                    </button>
                    <button
                      className="btn btn-success mx-3 px-5     Button-radius  m-2 my-sm-0 text-white"
                      type="submit"
                    >
                      Buy Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12  m-5 p-5  d-none d-md-block">
                <img src={TabImg} alt="Tablet-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHat is HMS Section  */}

      <section className="HMS_info ">
        <div className="container my-5  ">
          <div className="row">
            <h1 className="text-success fw-bold text-center mb-5">
              What is <span className="text-danger">HMS?</span>
            </h1>
            <div className="col-md-6 col-sm-12  text-center  ">
              <img src={infoimg} alt="What is HMS " />
            </div>
            <div className="col-md-6 col-sm-12 text-sm-light ">
              <p className="lh-lg h5">
                HMS (Hospital Management System) Helps Manage Hospitals/ CLinics
                & other Health Providers. It aids in completing the medical help
                process health providers can manage doctors & patient records,
                accounts keeping, inventories, pharmacies records, laboratory,
                reports and medical staff management.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we Offer Section  */}
      <section id="Offer" className="Offer_HMS  bg-info">
        <div className="container ">
          <div className="row py-5 ">
            <h1 className="text-success   fw-bold  text-center m-4 ">
              What We <span className="text-danger">Offer?</span>
            </h1>
            <h5 className="text-center  text-secondary lh-base">
              HMS enables management to handle all hospital procedures in one
              place. <br /> here are some fundamental benefits of HMS
            </h5>
          </div>
        </div>

        <div className="container">
          <div className="row  pb-5 row-cols-1 row-cols-lg-4 row-cols-sm-12 g-2 g-lg-3">
            <div className="col">
              <div className="bg-white  text-center corner-radius   p-5 ">
                <img src={SecurityIMg} alt="Security  " />
                <p className="h5 my-3">Security</p>
              </div>
            </div>
            <div className="col">
              <div className="bg-white  corner-radius text-center  p-5 ">
                <img src={InvationIMg} alt="Innovation  " />
                <p className="h5 m-3">Innovations</p>
              </div>
            </div>
            <div className="col">
              <div className=" bg-white corner-radius  text-center  p-5">
                <img src={AccuracyImg} alt="Accuracy  " />
                <p className="h5 m-3">Accuracy</p>
              </div>
            </div>
            <div className="col">
              <div className=" bg-white  corner-radius text-center  p-5">
                <img src={QualityIMg} alt="Quality Control  " />
                <p className="h5 m-3">Quality Control</p>
              </div>
            </div>
            <div className="col">
              <div className=" bg-white corner-radius  text-center  p-5">
                <img src={CostImg} alt="Cost Effective  " />
                <p className="h5 m-3">Cost Effective </p>
              </div>
            </div>
            <div className="col">
              <div className=" bg-white  corner-radius text-center  p-5">
                <img src={TransparencyIMg} alt="Transparency   " />
                <p className="h5 my-3">Transparency</p>
              </div>
            </div>
            <div className="col">
              <div className=" bg-white  corner-radius text-center  p-5">
                <img src={ReliableImg} alt="Easy adn Reliable   " />
                <p className="h5 m-3">Easy & Reliable</p>
              </div>
            </div>
            <div className="col  ">
              <div className=" bg-white  corner-radius text-center mb-5 pb-4  p-5">
                <img src={MedicalRImg} alt="Electronic Medical Record  " />
                <p className="h5  m-3">Electronic Medical record(ERM)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter section */}

      <section className="counter">
        <div className="container text-center">
          <div className="row col-md-12 col-sm-12">
            <div className="col p-5 ">
              <img className="img-fluid" src={docImg} />
              <h1 className="mt-4 display-3 text-white">50</h1>
              <p className="h4 text-white   ">Doctors</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={PatientImg} />
              <h1 className="mt-4 display-3 text-white">100</h1>
              <p className="h4 text-white  ">Patient</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={HospitalImg} />
              <h1 className="mt-4 display-3 text-white">20</h1>
              <p className="h4 text-white ">Hospitals</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={CitiesIMg} />
              <h1 className="mt-4 display-3 text-white">4</h1>
              <p className="h4 text-white "> Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section  */}
      <section id="Features" className="Features ">
        <div className="Container my-5">
          <h1 className="text-success fw-bold  text-center mt-5 p-2">
            Wide Range Of <span className="text-danger">Features</span>
          </h1>
          <p className="text-center   h6 lead lh-base">
            Ease Complex processes & keep track of everything in one place while
            proividing accurate data <br />
            about hospital financial conditions, which help developing furute
            strategies
          </p>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-sm-12 ">
              <div className="mx-4 corner-radius ">
                <ul className="features-list fw-bold text-secondary text-sm-start     ">
                  <li className=" list-group-item-danger text-danger Top-radius ">
                    Doctor Management
                  </li>
                  <li className=" bg-info ">Patient Management</li>
                  <li className=" bg-info">Appointment Management</li>
                  <li className=" bg-info">Finance Management</li>
                  <li className=" bg-info">Digital Prescription</li>
                  <li className=" bg-info">LAB Management</li>
                  <li className=" bg-info">Operation Theatre Management</li>
                  <li className=" bg-info">Dischange Summary</li>
                  <li className=" bg-info">Manage Multiple Locations</li>
                  <li className=" bg-info Bottom-radius">
                    Protable Equipment Track
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8   corner-radius col-sm-12 Management ">
              <div className=" p-5 ">
                <h3 className="text-white py-5">DOCTOR MANAGEMENT</h3>
                <ul className="text-white  h5 my-5 lh-lg">
                  <li>Doctor's Time Record</li>
                  <li>
                    The number of patients getting <br />
                    treatment by a doctor
                  </li>
                  <li>Keep track of the appointment</li>
                  <li>Patient Revies & Doctor Rating</li>
                </ul>

                <div className="mt-5 pt-5">
                  <button className="btn btn-outline-light  px-4  mt-5    py-2 mb-5 Button-radius">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HMS ADD value Section  */}
      <section id="Get-value" className="Get-Value">
        <div className="container my-5">
          <div className="row text-center">
            <h2 className="text-success fw-bold  ">
              How Can HMS Add
              <span className="text-danger"> Value to Hospitals? </span>
            </h2>
            <p className="text-secondary">
              Our HMS speed up regularr procedures & make them easier to
              perform. Digitally transform <br /> the hospital practices such as
              staff, doctor & patient, payroll , appointment & coordination
              management
            </p>

            <div className="col-md-6 d-none d-md-block">
              <img
                className="img-fluid mt-5 p-5"
                src={AddValueImg}
                alt="value-image"
              />
            </div>
            <div className="col-md-6 add_value col-sm-12">
              <ul className="Ul-danger text-start   text-danger">
                <li> Efficiency</li>
                <div className="text-secondary mr-5">
                  <p>
                    HMS system steam-line all routine processes of a hospital &
                    save time. Multiple functions can take at the same time
                    while sustaining records. HMS decreases the chances of human
                    errors & increases performance
                  </p>
                </div>
                <li>Accessibility & Reliable</li>
                <p className="ps-0">
                  Hospital Data can be accessed from anywhere with an
                  internet-connection device. Data & Records added in HMS
                  SOftwar, whether medical or financial, are more reliable than
                  hard copy
                </p>
                <li> Cost-Effective</li>
                <p>
                  Using HMS will reduce the number of human resources to handle
                  the business aspect, plus hospitals can go completely
                  paper-free & make the system more efficient & cost-effective
                </p>
                <li>Security</li>
                <p>HMS is backed with cloud & secured with layers like : </p>
              </ul>

              <ol className="sec_Value text-start fs-6">
                <i class="bi text-success bi-record-fill"></i>
                <span> CageFs </span>
                <i class="bi text-success bi-record-fill"></i>
                <span> SSL </span>
                <i class="bi text-success bi-record-fill"></i>
                <span> Mode Quality </span>
                <i class="bi text-success bi-record-fill"></i>
                <span> Immunity 360 </span>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section start here  */}

      <section className="Reviews bg-light">
        <div className="container py-5 d-none d-md-block">
          <div className="row text-center">
            <h1 className=" text-success fw-bold  ">
              Valueable Customer <span className="text-danger">Reviews</span>
            </h1>
            <p className="text-secondary h5">
              Our Customer is our priority. we listen carefully and deliver what
              satisfies our customers.
            </p>
            <Slider {...settings}>
              <div className="my-4">
                <div class=" bg-white col-md-3 col-sm-12  w-75 corner-radius shadow-sm ">
                  <div class="card-body ">
                    <img
                      src={Review1}
                      alt="Review Images"
                      className="mx-auto d-block"
                    />
                    <h5 class="card-title text-primary my-3 fw-bold">
                      MUHAMMAD USMAN
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <span className="px-1 fw-bold text-secondary">4.0</span>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                    </h6>

                    <hr></hr>
                    <p class="card-text text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="card-link  h6 text-end text-danger fw-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div class=" bg-white col-md-3  w-75 corner-radius shadow-sm ">
                  <div class="card-body">
                    <img
                      src={Review2}
                      alt="Review Images"
                      className="mx-auto d-block"
                    />
                    <h5 class="card-title text-primary my-3 fw-bold">
                      MUHAMMAD ALI
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <span className="px-1 fw-bold text-secondary">4.0</span>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                    </h6>
                    {/* <img src={quote} alr="Quote" className="inline-block" /> */}
                    <hr className="w-75"></hr>
                    <p class="card-text text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="card-link  h6 text-end text-danger fw-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div class=" bg-white col-md-3  w-75 corner-radius shadow-sm ">
                  <div class="card-body">
                    <img
                      src={Review3}
                      alt="Review Images"
                      className="mx-auto d-block"
                    />
                    <h5 class="card-title text-primary my-3 fw-bold">
                      MUHAMMAD ZESHAN
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <span className="px-1 fw-bold text-secondary">4.0</span>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                    </h6>

                    <hr></hr>
                    <p class="card-text text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="card-link  h6 text-end text-danger fw-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div class=" bg-white col-md-3  w-75 corner-radius shadow-sm ">
                  <div class="card-body">
                    <img
                      src={Review4}
                      alt="Review Images"
                      className="mx-auto d-block"
                    />
                    <h5 class="card-title text-primary my-3 fw-bold">
                      MUHAMMAD NOMAN
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <span className="px-1 fw-bold text-secondary">4.0</span>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                    </h6>

                    <hr></hr>
                    <p class="card-text text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="card-link  h6 text-end text-danger fw-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div class=" bg-white col-md-3  w-75 corner-radius shadow-sm ">
                  <div class="card-body">
                    <img
                      src={Review5}
                      alt="Review Images"
                      className="mx-auto d-block"
                    />
                    <h5 class="card-title text-primary my-3 fw-bold">
                      KELLY JENNER
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <span className="px-1 fw-bold text-secondary">4.0</span>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                      <i class="bi  bi-star-fill text-warning"></i>
                    </h6>

                    <hr></hr>
                    <p class="card-text text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="#"
                      class="card-link  h6 text-end text-danger fw-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* demo links  */}

      <section className="link-Buttons text-center">
        <div className="container my-5">
          <button
            type="button"
            className="btn Button-radius  btn-outline-success btn-lg"
            href="#contact"
          >
            Request a Demo
          </button>
          <button
            type="button"
            class="btn Button-radius  mx-3 btn-lg px-5 btn-primary"
          >
            Buy Now
          </button>
        </div>
      </section>

      {/* Package include section */}
      <section className="Package_Include bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <div className="container m-5 ">
                <ul className="Ul-success    h4 lh-lg ">
                  <li>HMS Software</li>
                  <li>
                    Free Website That can be customize by admin <br />
                    (visual & Text Content)
                  </li>
                  <li> Mobile Application </li>
                  <li>Free Scurity & Updates </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 bg-includes py-5  ">
              <h1 className="text-white fw-bold  text-center py-5 display-4  ">
                Package <br /> Includes
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section  */}
      <section id="pricing" className="Pricing">
        <div className="container">
          <div className="row text-center m-5">
            <h1 className="text-success fw-bold   ">
              Simple, Tansparent <span className="text-danger"> Pricing</span>
            </h1>
            <p className="lead text-secondary  my-2">
              Pricing Plans that suit your needs
            </p>
            <div className="row mt-5">
              <div className="col-md-4 col-sm-12 my-4">
                <div className="card border corner-radius  border-danger">
                  <div className="card-body">
                    <h3 className="card-title">Individual</h3>
                    <p className="card-text h1 my-5 text-danger fw-bold ">
                      $49<span className="h3">/mo</span>
                    </p>

                    <ul className="Ul-danger ps-5 text-start">
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button
                      type="button"
                      class="btn btn-danger Button-radius py-3  text-white  w-75  btn-block"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12  ">
                <div className="card border-1  corner-radius  border-success">
                  <div className="card-body">
                    <h3 className="card-title h3  ">Standard</h3>
                    <p className="card-text h1  fw-bold  my-5 text-success">
                      $99<span className="h3">/mo</span>
                    </p>
                    <ul className="Ul-success ps-5 text-start">
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                      <li>lorem Ibsom</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button
                      type="button"
                      className="btn btn-success w-75 Button-radius py-3 text-white  btn-block"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4  col-sm-12 my-4">
                <div className="card border corner-radius  border-primary">
                  <div className="card-body">
                    <h3 className="card-tit le">Enterprise</h3>
                    <p className="card-text h1 fw-bold my-5 text-primary">
                      $199<span className="h3">/mo</span>
                    </p>
                    <div className="text-start">
                      <ul className="Ul-primary ps-5">
                        <li>lorem Ibsom</li>
                        <li>lorem Ibsom</li>
                        <li>lorem Ibsom</li>
                      </ul>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary  w-75  text-white  Button-radius   py-3   btn-block"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Demo Section  */}
      <section id="contact" className="Request_Form bg-info p-5">
        <div className="container text-center">
          <h1 className="text-success fw-bold mb-4">
            Request a <span className="text-danger">Demo </span>
          </h1>
          <p className="h5  text-secondary ">
            Try For Free see how it can take your hospital practical to the next
            level
          </p>
          <di v className="row m-5">
            <div className="col-md-6 col-sm-12">
              <img className="img-fluid" src={formIMg} alt="info-desk" />
            </div>
            <div className="col-md-6 col-sm-12">
              <form
                className="row  g-3  needs-validation"
                novalidate
                onSubmit={(e) => sendEmail(e)}
              >
                <div className="col-auto">
                  <input
                    name="fullname"
                    type="text"
                    className="form-control  form-control-lg"
                    id="validationCustom03"
                    placeholder="Full Name"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Company Name"
                    name="company"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Designation"
                    name="designation"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="City"
                    name="city"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Cell Number"
                    name="number"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-success  fw-bold h4  text-white Button-radius  mb-3 px-5 py-3 mt-4"
                  >
                    Request a demo
                  </button>
                </div>
              </form>
              <p hidden={Show} className="text-danger text-start bg-light h5">
                We Will Contact You Soon ! Thank You
              </p>
            </div>
          </di>
        </div>
      </section>

      {/* Footer Start From here  */}

      <section className="Footer bg-primary">
        <div className="container text-white">
          <div className="row p-5">
            <div className="col">
              <p>
                HMS (Hospital Management system) Helps manage Hospitals/Clients
                & ontehr health providers. it aids completing the medial help
                process; health providers can manage doctors & patient records,
                accounts keeping, invertories , pharmacies record,
                laboratory,reports and medicl staff management.
              </p>
              <i className="bi h3 px-2 bi-facebook"></i>
              <i className="bi h3 px-2 bi-twitter"></i>
              <i className="bi h3 px-2 bi-instagram"></i>
              <i className="bi h3 px-2 bi-youtube"></i>
            </div>
            <div className="col">
              <p> Loream Ibsom lorem Lobsom </p>
              <p> Loream Ibsom lorem Lobsom </p>
              <p> Loream Ibsom lorem Lobsom </p>
              <p> Loream Ibsom lorem Lobsom </p>
              <p> Loream Ibsom lorem Lobsom </p>
            </div>
            <div className="col">
              <p> Loream Ibsom lorem Lobsom</p>
              <p> Loream Ibsom lorem Lobsom</p>
              <p> Loream Ibsom lorem Lobsom</p>
              <p> Loream Ibsom lorem Lobsom</p>
              <p> Loream Ibsom lorem Lobsom</p>
            </div>
          </div>
        </div>

        <div className="container-fluid  text-white text-center bg-primary">
          <sup>Copyright &copy; 2021 | Developed by PITS</sup>
        </div>
      </section>
    </>
  );
};

export default App;
