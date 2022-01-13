import React from 'react';
import { ListGroup } from 'react-bootstrap';

function SidebarData() {
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <h4>
        <ListGroup>
          <ListGroup.Item action href="#dash"> <i class="fas fa-home"></i>&nbsp; Dashboard</ListGroup.Item>
          <ListGroup.Item action href="#link1"> <i class="fas fa-cogs"></i>&nbsp; Setting App</ListGroup.Item>
          <ListGroup.Item variant="info">MENU MASTER</ListGroup.Item>
          <ListGroup.Item action href="#link2"> <i class="fas fa-phone-alt"></i>&nbsp; Kontak Kami</ListGroup.Item>
          <ListGroup.Item action href="#link3"> <i class="fas fa-folder-open"></i>&nbsp; Data Master</ListGroup.Item>
          <ListGroup.Item variant="info">MENU TRANSAKSI</ListGroup.Item>
          <ListGroup.Item action href="#link4"> <i class="fas fa-laptop"></i>&nbsp; Monitoring</ListGroup.Item>
          <ListGroup.Item action href="#link5"> <i class="fas fa-shopping-basket"></i>&nbsp; Order</ListGroup.Item>
          <ListGroup.Item variant="info">ADDITIONAL</ListGroup.Item>
          <ListGroup.Item action href="#link6"> <i class="fas fa-rss-square"></i>&nbsp; Social Media</ListGroup.Item>
          <ListGroup.Item variant="info">SOCIAL MEDIA</ListGroup.Item>
          <ListGroup.Item action href="#link7"> <i class="fas fa-users"></i>&nbsp; User</ListGroup.Item>
        </ListGroup>
      </h4>
    </div>
  );
}

export default SidebarData;