import React, { Component } from "react";
import Deskripsi from "./Deskripsi";
import Alamat from "./Alamat";
import Kontak from "./Kontak";
import Web from "./Web";

const apiURL = "http://localhost:8000/users/";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [], // Untuk tampung Get all data
            totalData: 0, // Untuk Hitung All Data
            isUpdate: false, // Untuk Fileter Fungsi
            Notif: {
                // Untuk Tampung respon Dari Server
                alertShow: false,
                actionType: "",
                responCode: 0,
            },
            DataUserNew: {
                // untuk Tampung data Update / New data
                id: 1,
                nama: "",
                kontak: "",
                deskripsi: "",
                alamat: "",
                web: "",
            },
        };
    }

    componentDidMount() {
        this.GetdataUsers();
    }

    GetdataUsers() {
        fetch(apiURL)
            .then((res) => {
                if (res.status === 200) return res.json();
                else return <p>No data Found</p>;
            })
            .then((resdata) => {
                console.log(resdata);
                // console.log('Numrow', resdata.length)
                this.setState({
                    dataUser: resdata,
                    totalData: resdata.length,
                });
            });
    }
    SaveNewDataUSer = () => {
        const Newdata = this.state.DataUserNew;

        fetch(apiURL, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Newdata),
        }).then((res) => {
            console.log(res);
            console.log("Status Create", res.status);

            // Untuk Tampung respon Dari Server
            this.setState({
                Notif: {
                    alertShow: true,
                    actionType: "created",
                    responCode: res.status,
                },
            });

            this.GetdataUsers();
            this.ClearForm();
        });
    };
    UpdateDataUser = () => {
        const dataUpdate = this.state.DataUserNew;
        const id = dataUpdate.id;

        fetch(apiURL + id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUpdate),
        }).then((res) => {
            console.log(res);
            console.log("Status Update", res.status);

            // Untuk Tampung respon Dari Server
            this.setState({
                Notif: {
                    alertShow: true,
                    actionType: "updated",
                    responCode: res.status,
                },
            });

            this.GetdataUsers();
            this.ClearForm();
        });
    };
    HendelOnchange = (event) => {
        // console.log('Form Change')
        const NumberingId = this.state.totalData + 1; // Untuk ID New Data
        let prmInputUser = { ...this.state.DataUserNew }; // Copy State
        if (!this.state.isUpdate) {
            //Cek Jika Update Data Idnya Tidak Di Ubah
            prmInputUser["id"] = NumberingId;
        }
        prmInputUser[event.target.name] = event.target.value;
        this.setState({
            DataUserNew: prmInputUser,
        });
    };
    ClearForm = () => {
        this.setState({
            isUpdate: false,
            DataUserNew: {
                id: 1,
                nama: "",
                kontak: "",
                deskripsi: "",
                alamat: "",
                web: "",
            },
        });

        // Mengembalikan Nilai Awal Notif
        setInterval(() => {
            this.setState({
                Notif: {
                    alertShow: false,
                    actionType: "",
                    responCode: 0,
                },
            });
        }, 4500);
    };
    HendelSimpan = () => {
        if (this.state.isUpdate) {
            this.UpdateDataUser();
        } else {
            this.SaveNewDataUSer();
        }
    };
    HendelUpdate = (data) => {
        console.log("Update id", data.id);
        console.log("Update arry", data);
        this.setState({
            DataUserNew: data,
            isUpdate: true,
        });
    };
    render() {
        return (
            <div>
                <section class="footer">
                    <div class="share">
                        <a href="/#" class="btn">facebook</a>
                        <a href="/#" class="btn">twitter</a>
                        <a href="/#" class="btn">instagram</a>
                        <a href="/#" class="btn">pinterest</a>
                        <a href="/#" class="btn">linkedin</a>
                    </div>
                    <footer class="text-center text-white">
                        <div class="container p-3">
                            <section class="mb-3">
                                <h4>
                                    <p>
                                        {this.state.dataUser.map((dataUser) => {
                                            return (
                                                <Deskripsi
                                                    key={dataUser.id}
                                                    data={dataUser}
                                                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                                                />
                                            );
                                        })}
                                    </p>
                                </h4>
                            </section>
                            <section class="">
                                <h4>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                            <h5 class="text-uppercase">Alamat</h5>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <a href="#!" class="text-white">
                                                        {this.state.dataUser.map((dataUser) => {
                                                            return (
                                                                <Alamat
                                                                    key={dataUser.id}
                                                                    data={dataUser}
                                                                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                                                                />
                                                            );
                                                        })}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                            <h5 class="text-uppercase">Kontak</h5>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <a href="#!" class="text-white">{this.state.dataUser.map((dataUser) => {
                                                        return (
                                                            <Kontak
                                                                key={dataUser.id}
                                                                data={dataUser}
                                                                update={this.HendelUpdate} // Pemanggilan Hendel Update
                                                            />
                                                        );
                                                    })}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                            <h5 class="text-uppercase">Web</h5>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <a href="#!" class="text-white">{this.state.dataUser.map((dataUser) => {
                                                        return (
                                                            <Web
                                                                key={dataUser.id}
                                                                data={dataUser}
                                                                update={this.HendelUpdate} // Pemanggilan Hendel Update
                                                            />
                                                        );
                                                    })}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                            <h5 class="text-uppercase">Web</h5>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <a href="#!" class="text-white">{this.state.dataUser.map((dataUser) => {
                                                        return (
                                                            <Web
                                                                key={dataUser.id}
                                                                data={dataUser}
                                                                update={this.HendelUpdate} // Pemanggilan Hendel Update
                                                            />
                                                        );
                                                    })}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </h4>
                            </section>
                        </div>
                    </footer>
                    <h1 class="credit"> created with <span> mr. prodigy </span> | all rights reserved! </h1>
                </section>
            </div>
        );
    };
}


export default Footer;
