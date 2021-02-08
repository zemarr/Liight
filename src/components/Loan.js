import React from "react";
import { Link } from "react-router-dom";

import Heading from "./Heading";
import Button from "./Button";

const Loan = () => {
  return (
    <>
      <section className="loan">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-container">
                <div className="form-heading">
                  <Heading>
                    <h4>LOAN</h4>
                  </Heading>
                  <Link to="/">
                    <Button className="exit">
                      <div className="icon"></div>
                    </Button>
                  </Link>
                </div>
                <hr />
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      id="meter-number"
                      placeholder="Meter Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      id="phone-number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      id="topup-amount"
                      placeholder="Amount"
                    />
                  </div>
                  <div className="finish">
                    <Button type="submit" className="signin-btn p-3">
                      Recharge
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loan;
