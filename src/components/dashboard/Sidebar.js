import React, { Component } from "react";
import './Sidebar.css'
import SidebarData from "./SidebarData";
import { Tab } from "react-bootstrap";
import Setapp from "./Setapp"
import Kontak from "./Kontak"
import User from "./User";
import Social from "./Social";
import Datamaster from "./Datamaster";
import Monitoring from "./Monitoring";
import Order from "./Order";
import Dash from "./Dash"

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
            <div className="main__greeting">
              <h1>Hello Codersbite</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>

          {/* <!-- MAIN TITLE ENDS HERE --> */}

          {/* <!-- CHARTS STARTS HERE --> */}
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dash">
            <div className="charts">
              <div className="charts__left">
                <div>
                  <SidebarData />
                </div>
                {/* <Chart /> */}
              </div>
              <div className="charts__right">
                <div class="dropdown">
                  <Tab.Content>
                    <Tab.Pane eventKey="#dash">
                      <Dash />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link1">
                      <Setapp />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <Kontak />
                    </Tab.Pane>
                    <Tab.Pane class="dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                      <Datamaster />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <Monitoring />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                      <Order />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                      <Social />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link7">
                      <User />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </div>
          </Tab.Container>
          {/* <!-- CHARTS ENDS HERE --> */}
        </div>
      </main>
    );
  }
}
