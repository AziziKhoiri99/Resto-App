import React from "react";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <div class="box-container">
      <div class="box">
        <span class="price">Rp. {numberWithCommas(menu.harga)}</span>
        <img src={
          "assets/images/" +
          menu.category.nama.toLowerCase() +
          "/" +
          menu.gambar
        } alt="" />
        <h3>{menu.nama}</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <a class="btn" onClick={() => masukKeranjang(menu)}>order now</a>
      </div>
      {/* <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <Button variant="primary" onClick={() => masukKeranjang(menu)}>Tambah Pesanan</Button>
        </Card.Body>
      </Card>
    </Col> */}
    </div>
  );
};

export default Menus;
