import React, { Component } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";
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

    handleShow = (menuKeranjang) => {
        this.setState({
            showModal: true,
            keranjangDetail: menuKeranjang,
            jumlah: menuKeranjang.jumlah,
            keterangan: menuKeranjang.keterangan,
            totalHarga: menuKeranjang.total_harga,
        });
    };

    handleClose = () => {
        this.setState({
            showModal: false,
        });
    };

    tambah = () => {
        this.setState({
            jumlah: this.state.jumlah + 1,
            totalHarga:
                this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
        });
    };

    kurang = () => {
        if (this.state.jumlah !== 1) {
            this.setState({
                jumlah: this.state.jumlah - 1,
                totalHarga:
                    this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
            });
        }
    };

    changeHandler = (event) => {
        this.setState({
            keterangan: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.handleClose();

        const data = {
            jumlah: this.state.jumlah,
            total_harga: this.state.totalHarga,
            product: this.state.keranjangDetail.product,
            keterangan: this.state.keterangan,
        };

        axios
            .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
            .then((res) => {
                swal({
                    title: "Update Pesanan!",
                    text: "Sukses Update Pesanan " + data.product.nama,
                    icon: "success",
                    button: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    };

    hapusPesanan = (id) => {
        this.handleClose();

        axios
            .delete(API_URL + "keranjangs/" + id)
            .then((res) => {
                swal({
                    title: "Hapus Pesanan!",
                    text:
                        "Sukses Hapus Pesanan " + this.state.keranjangDetail.product.nama,
                    icon: "error",
                    button: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
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

    componentDidUpdate(prevState) {
        if (this.state.keranjangs !== prevState.keranjangs) {
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
        return (
            <div className="container-xxl mt-5">
                {keranjangs.length !== 0 && (
                    <Card className="overflow-auto ">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <h4>
                                    <strong className="text-center">Daftar Pesanan</strong>
                                </h4>
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
                                            <tr key={menuKeranjang.id} >
                                                <th scope="row">{index + 1}</th>
                                                <td>{menuKeranjang.product.nama}</td>
                                                <td>{menuKeranjang.jumlah}</td>
                                                <td>Rp. {numberWithCommas(menuKeranjang.product.harga)}</td>
                                                <td>{numberWithCommas(menuKeranjang.total_harga)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <form>
                                    <h4>
                                        <strong className="text-center">Detail Pesanan</strong>
                                    </h4>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nama :</label><br />
                                        <label for="exampleInputEmail1" class="form-label">Nama</label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">No.Meja :</label><br />
                                        <label for="exampleInputPassword1" class="form-label">No.Meja</label>
                                    </div>

                                    <h4>
                                        <strong className="text-center">Informasi Tambahan</strong>
                                    </h4>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Catatan :</label><br />
                                        <label for="exampleInputEmail1" class="form-label">Catatan</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <TotalBayar keranjangs={keranjangs} {...this.props} />
                    </Card>
                )}
            </div>
        );
    }
}
