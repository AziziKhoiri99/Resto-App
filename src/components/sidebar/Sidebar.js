import React, { Component } from "react";
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <main className="x">
        <br />
        <br />
        <br />
        <br />
        <div className="main__container">
          {/* <!-- MAIN TITLE STARTS HERE --> */}

          <div className="main__title">
            {/* <img src={hello} alt="hello" /> */}
            <div className="main__greeting">
              <h1>Hello Codersbite</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>

          {/* <!-- MAIN TITLE ENDS HERE --> */}

          {/* <!-- CHARTS STARTS HERE --> */}
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              {/* <Chart /> */}
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>$75,300</p>
                </div>

                <div className="card2">
                  <h1>Sales</h1>
                  <p>$124,200</p>
                </div>

                <div className="card3">
                  <h1>Users</h1>
                  <p>3900</p>
                </div>

                <div className="card4">
                  <h1>Orders</h1>
                  <p>1881</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- CHARTS ENDS HERE --> */}
        </div>
      </main>
    );
  }
}
