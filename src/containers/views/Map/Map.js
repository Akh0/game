import React, { Component } from 'react';
import styled from "@emotion/styled";
import _ from "lodash";
import CardMap from "../../../Components/Map/CardMap";
import { cards } from "../../../utils/cards";

const Container = styled.div`
  background-image: url("https://images.squarespace-cdn.com/content/v1/5aaf208470e802c436dc1280/1568080216644-6QDT21SZICO3TCYGO2GE/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/PiratesOutlaws-Gallery54.jpg?format=2500w");
  background-size: 100% 100%;
  -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  height: calc(100% - 100px);
  text-align: center;
  color: white;
  min-height: 250px;
`

const RowOverflow = styled.div`
  overflow-x: auto; 
  white-space: nowrap;
  flex-wrap: nowrap;
`

const TextDescription = styled.div`
  font-size: 3vw;
  text-shadow: 1px 1px 2px black;
`

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards,
      user: {
        level: 10,
      }
    }
  }

  render() {
    return (
      <Container className="container-fluid align-middle">
        <div className="container">
          <RowOverflow className="row align-items-center">
            {_.map(this.state.cards, card => (
              <CardMap key={card.name} card={card} user={this.state.user} />
            ))}
          </RowOverflow>
          <TextDescription className="col-sm-12">
            Veuillez selectionner une carte sur laquelle voyager !
          </TextDescription>
        </div>
      </Container>
    );
  }
}
export default Map;
