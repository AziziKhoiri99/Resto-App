import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import s from './images/s-img-1.jpg';
import s1 from './images/s-1.png';
import si2 from './images/s-img-4.jpg';
import s2 from './images/s-4.png';
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
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {categories &&
              categories.map((category) => (
                <div class="box-container">
                  <div class="box">
                    <Icon2 nama={category.nama} />
                    <div class="content">
                      <Icon nama={category.nama} />
                      <h3>{category.nama}</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                  </div>
                  <div class="card-footer text-center mx-auto">
                    <button className="btn"
                      key={category.id}
                      onClick={() => changeCategory(category.nama)}>
                      <small className={categoriYangDipilih === category.nama && "category-aktif"}>Lebih Detail</small>
                    </button>
                  </div>
                </div>
              ))}
          </div>

        </section>
      </div>
    );
  }
}
