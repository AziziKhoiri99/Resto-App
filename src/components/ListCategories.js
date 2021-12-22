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

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
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
      <Col className="mt-5">
        <ListGroup>
          <div class="text-center row row-cols-1 row-cols-md-3 g-4">
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
                <div class="col-lg-4">
                  <svg class="bd-placeholder-img rounded-circle" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <Icon nama={category.nama} />
                  </svg>
                  <h2>{category.nama}</h2>
                  <p><button key={category.id} className={categoriYangDipilih === category.nama && "category-aktif"} onClick={() => changeCategory(category.nama)}>
                    View details &raquo;
                  </button></p>
                </div>
              ))}
          </div>
        </ListGroup>
      </Col>
    );
  }
}
