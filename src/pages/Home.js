import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { ListCategories, Menus } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";
import home from '../components/images/home-img.png';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Makanan",
    };
  }

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

    this.getListKeranjang();
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.keranjangs !== prevState.keranjangs) {
  //     axios
  //       .get(API_URL + "keranjangs")
  //       .then((res) => {
  //         const keranjangs = res.data;
  //         this.setState({ keranjangs });
  //       })
  //       .catch((error) => {
  //         console.log("Error yaa ", error);
  //       });
  //   }
  // }

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
    const { menus, categoriYangDipilih, keranjangs } = this.state;
    return (
      <div className="container-xxl">
        <section class="home" id="home">

          <div class="content">
            <h3>food made with love</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet
              laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem
              quisquam eos!</p>
            <a href="/#" class="btn">order now</a>
          </div>

          <div class="image">
            <img src={home} alt="" />
          </div>

        </section>
        <Container fluid>
          <ListCategories
            changeCategory={this.changeCategory}
            categoriYangDipilih={categoriYangDipilih}
            className="mt-5"
          />
          <section class="popular" id="popular">
            <h1 class="heading"> most <span>popular</span> foods </h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {menus &&
                menus.map((menu) => (
                  <Menus
                    key={menu.id}
                    menu={menu}
                    masukKeranjang={this.masukKeranjang}
                  />
                ))}
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
