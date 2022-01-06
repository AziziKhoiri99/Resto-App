import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";
import s from './images/s-img-1.jpg';
import s1 from './images/s-1.png';
import si2 from './images/s-img-2.jpg';
import s2 from './images/s-2.png';
import si3 from './images/s-img-3.jpg';
import s3 from './images/s-3.png';

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <img src={s1} alt="" />;
  if (nama === "Minuman")
    return <img src={s2} alt="" />;
  if (nama === "Cemilan")
    return <img src={s3} alt="" />;

  return <img src={s1} alt="" />;
};

const Icon2 = ({ nama }) => {
  if (nama === "Makanan")
    return <img class="image" src={s} alt="" />;
  if (nama === "Minuman")
    return <img class="image" src={si2} alt="" />;
  if (nama === "Cemilan")
    return <img class="image" src={si3} alt="" />;

  return <img src={s} alt="" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;
    return (
      <div>
        <section class="speciality" id="speciality">

          <h1 class="heading"> our <span>speciality</span> </h1>

          <div class="box-container">

            {categories &&
              categories.map((category) => (
                // <ListGroup.Item
                //   key={category.id}
                //   onClick={() => changeCategory(category.nama)}
                //   className={categoriYangDipilih === category.nama && "category-aktif"}
                //   style={{ cursor: 'pointer' }}
                // >
                //   <h5>
                //     <Icon nama={category.nama} /> {category.nama}
                //   </h5>
                // </ListGroup.Item>
                // <div class="col-lg-4">
                //   <svg class="bd-placeholder-img rounded-circle" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                //     <Icon nama={category.nama} />
                //   </svg>
                //   <h2>{category.nama}</h2>
                //   <p><button key={category.id} className={categoriYangDipilih === category.nama && "category-aktif"} onClick={() => changeCategory(category.nama)}>
                //     View details &raquo;
                //   </button></p>
                // </div>
                <div class="box">
                  <Icon2 nama={category.nama} />
                  <div class="content">
                    <Icon nama={category.nama} />
                    <h3>{category.nama}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                      tenetur voluptates aperiam tempore libero labore aut.</p>
                  </div>
                </div>
              ))}
          </div>

        </section>
      </div>
    );
  }
}
