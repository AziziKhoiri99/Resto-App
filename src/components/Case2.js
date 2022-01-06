import React, { Component } from "react";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Case2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            keranjangDetail: false,
            jumlah: 0,
            keterangan: "",
            totalHarga: 0,
            keranjangs: [],
        };
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    componentDidMount() {
        axios
            .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
            .then((res) => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "keranjangs")
            .then((res) => {
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    }

    getListKeranjang = () => {
        axios
            .get(API_URL + "keranjangs")
            .then((res) => {
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    }

    changeCategory = (value) => {
        this.setState({
            categoriYangDipilih: value,
            menus: [],
        });

        axios
            .get(API_URL + "products?category.nama=" + value)
            .then((res) => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    };

    masukKeranjang = (value) => {
        axios
            .get(API_URL + "keranjangs?product.id=" + value.id)
            .then((res) => {
                if (res.data.length === 0) {
                    const keranjang = {
                        jumlah: 1,
                        total_harga: value.harga,
                        product: value,
                    };

                    axios
                        .post(API_URL + "keranjangs", keranjang)
                        .then((res) => {
                            this.getListKeranjang();

                            swal({
                                title: "Sukses Masuk Keranjang",
                                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                                icon: "success",
                                button: false,
                                timer: 1500,
                            });
                        })
                        .catch((error) => {
                            console.log("Error yaa ", error);
                        });
                } else {
                    const keranjang = {
                        jumlah: res.data[0].jumlah + 1,
                        total_harga: res.data[0].total_harga + value.harga,
                        product: value,
                    };

                    axios
                        .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
                        .then((res) => {
                            swal({
                                title: "Sukses Masuk Keranjang",
                                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                                icon: "success",
                                button: false,
                                timer: 1500,
                            });
                        })
                        .catch((error) => {
                            console.log("Error yaa ", error);
                        });
                }
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    };

    render() {
        const keranjangs = this.state.keranjangs;
        const { values, handleChange } = this.props;
        return (
            <div className="container-xxl x">
                <h4>
                    <strong className="text-center">Daftar Pesanan</strong>
                </h4>
                <section class="order" id="order">

                    <h1 class="heading"> <span>order</span> now </h1>

                    <div class="row">
                        {keranjangs.length !== 0 && (
                            <>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Pesanan</th>
                                            <th scope="col">Jumlah</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Total Harga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {keranjangs.map((menuKeranjang, index) => (
                                            <tr key={menuKeranjang.id} onClick={() => this.handleShow(menuKeranjang)}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{menuKeranjang.product.nama}</td>
                                                <td>{menuKeranjang.jumlah}</td>
                                                <td>Rp. {numberWithCommas(menuKeranjang.product.harga)}</td>
                                                <td>{numberWithCommas(menuKeranjang.total_harga)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <form action="">
                                    <div class="inputBox">
                                        <input type="text" placeholder="first name" onChange={handleChange('firstName')}
                                            defaultValue={values.firstName} />
                                        <input type="text" placeholder="last name" onChange={handleChange('lastName')}
                                            defaultValue={values.lastName} />
                                    </div>
                                    <textarea placeholder="email" name="" id="" cols="30" rows="10"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email}>

                                    </textarea>
                                    <input type="submit" value="Back" class="btn" onClick={this.back}
                                    />&nbsp;
                                    <input type="submit" value="Next" class="btn" onClick={this.continue} />
                                </form>
                            </>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}
