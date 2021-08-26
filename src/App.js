import React from "react";
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
const App = () => {
  return (
    <>
      <Navbar />
      <section className="Main_section">
        <div className="container-fluid ">
          <div className="container">
            <div className="row">
              <div className="col-sm-4  m-2">
                <div className="my-5">
                  <h1 className="text-white">
                    Optimize Healthcare
                    <br /> Operations with us
                  </h1>
                  <h3 className="text-white lh-base      mt-5 lead">
                    A world-class software that is intuitive, verstile,
                    <br /> secure and efficient enough to empower your
                    hospital's services digitally{" "}
                  </h3>
                </div>
                <div className="Header_Btns  pt-5">
                  <form class="form-inline  my-lg-0">
                    <button
                      class="btn btn-outline-light   px-3 my-2 my-sm-0"
                      type="submit"
                    >
                      Request Demo
                    </button>
                    <button
                      class="btn btn-success mx-3 px-5 rounded border-1 m-2 my-sm-0"
                      type="submit"
                    >
                      Buy Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col  m-5 p-5">
                <img src={TabImg} alt="Tablet-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HMS_info">
        <div class="container my-5">
          <div class="row">
            <h2 className="text-success text-center mb-5">
              What is <span className="text-danger">HMS?</span>
            </h2>
            <div className="col ">
              <img src={infoimg} alt="what is HMS " className="text-center" />
            </div>
            <div className="col">
              <p className="lh-lg  h6">
                HMS (Hospital Management System ) Helps Manage Hospitals/
                CLinics & other Health Providers. It aids in completing the
                medical help process ; health providers can manage doctors &
                patient records, accounts keeping, inventories, pharmacies
                records, laboratory, reports and medical staff management.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Offer_HMS bg-light">
        <div className="container bg-light  ">
          <div className="row py-5 ">
            <h3 className="text-success text-center m-4 ">
              What We <span className="text-danger">Offer?</span>
            </h3>
            <h6 className="text-center  lh-base">
              HMS enables management to handle all hospital procedures in one
              place. <br /> here are some fundamental benefits of HMS
            </h6>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-3 text-center rounded-5 bg-white p-5   ">
              <img src={SecurityIMg} alt="Security  " />
              <p className="h4 m-3">Security</p>
            </div>
            <div className="col-3 text-center rounded-5 bg-white p-5   ">
              <img src={InvationIMg} alt="Accuracy  " />
              <p className="h4 m-3">Innovations</p>
            </div>

            <div className="col-3 text-center rounded-5 bg-white p-5  ">
              <img src={AccuracyImg} alt="Accuracy  " />
              <p className="h4 m-3">Accuracy</p>
            </div>
            <div className="col-3 text-center rounded-5 bg-white p-5   ">
              <img src={QualityIMg} alt="Quality Control  " />
              <p className="h4 m-3">Quality Control</p>
            </div>
            <div className="col  text-center rounded-5 bg-white p-5  ">
              <img src={CostImg} alt="Cost Effective  " />
              <p className="h4 m-3">Cost Effective </p>
            </div>
            <div className="col text-center rounded-5 bg-white p-5  ">
              <img src={TransparencyIMg} alt="Transparency   " />
              <p className="h4 m-3">Transparency</p>
            </div>
            <div className="col text-center rounded-5 bg-white p-5 ">
              <img src={ReliableImg} alt="Easy adn Reliable   " />
              <p className="h4 m-3">Easy & Reliable</p>
            </div>
            <div className="col text-center rounded-5 bg-white p-5 ">
              <img src={MedicalRImg} alt="Electronic Medical Record  " />
              <p className="h4 m-3">Electronic Medical record(ERM)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="counter">
        <div className="container">
          <div className="row">
            <div className="col p-5">
              <img src={docImg} />
              <h1 className="mt-4 display-3 text-white">50</h1>
              <p className="h4 text-white">Doctors</p>
            </div>
            <div className="col p-5">
              <img src={PatientImg} />
              <h1 className="mt-4 display-3 text-white">100</h1>
              <p className="h4 text-white">Patient</p>
            </div>
            <div className="col p-5">
              <img src={HospitalImg} />
              <h1 className="mt-4 display-3 text-white">20</h1>
              <p className="h4 text-white">Hospitals</p>
            </div>
            <div className="col p-5">
              <img src={CitiesIMg} />
              <h1 className="mt-4 display-3 text-white">4</h1>
              <p className="h4 text-white"> Cities</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Features">
        <div className="Container-fluid">
          <h1 className="text-success text-center mt-5 p-2">
            Wide Range Of <span className="text-danger">Features</span>
          </h1>
          <p className="text-center h6 lh-lg">
            Ease Complex processes & keep track of everything in one place while
            proividing accurate data <br />
            about hospital financial conditions, which help developing furute
            strategies
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">2</div>
            <div className="col">2</div>
          </div>
        </div>
      </section>
      <section className="Request_Form bg-light p-5">
        <div className="container text-center">
          <h1 className="text-success">
            Request a <span className="text-danger">Demo </span>
          </h1>
          <p className="h6">
            Try For Free see how it can take your hospital practical to the next
            level
          </p>
          <div className="row m-5">
            <div className="col ">
              <img src={formIMg} alt="info-desk" />
            </div>
            <div className="col">
              <form>
                <div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control  mb-2 mr-sm-2"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="Footer bg-primary">
        <div className="container">
          <div className="row p-5">
            <div className="col">
              <p>
                HMS (Hospital Management system) Helps manage Hospitals/Clients
                & ontehr health providers. it aids completing the medial help
                process; health providers can manage doctors & patient records,
                accounts keeping, invertories , pharmacies record,
                laboratory,reports and medicl staff management.
              </p>
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
        <div className="container-fluid bg-info text-center">
          <p>Copyright &copy; 2021 | Developed by PITS</p>
        </div>
      </section>
    </>
  );
};

export default App;
