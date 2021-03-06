import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import _ from "lodash";
import ItemBox from "./ItemBox";
import hammerSvg from "./svg/hammer.svg";

const SubTitle = styled.div`
  font-size: 20px;
`

const ForgeImage = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  
  ${props => ( props.canBeCrafted === false && css`
    opacity: 0.5;
    cursor: not-allowed;
  `)};
`

class ItemCrafting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canBeCrafted: true,
    }
  }

  componentDidMount() {
    this.checkIfItemCanBeCrafted();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.item !== prevProps.item || this.props.characterItems !== prevProps.characterItems) {
      this.checkIfItemCanBeCrafted();
    }
  }

  checkIfItemCanBeCrafted = () => {
    const {item} = this.props;
    let count = 0;
    let end = false;

    while (count < item.itemsToCraft.length && end === false) {
      if (this.getOwnedItems(item.itemsToCraft[count].item) < item.itemsToCraft[count].amount) {
        this.setState({
          canBeCrafted: false,
        })
        end = true;
      }
      count++;
    }

    if (!end) {
      this.setState({
        canBeCrafted: true,
      })
    }
  }

  getOwnedItems = (item) => {
    const { characterItems } = this.props;

    return _.filter(characterItems, { id: item.id }).length;
  }

  render() {
    const { item } = this.props;
    const { canBeCrafted } = this.state;

    return (
      <>
        <div className="col-sm-12 d-flex offset-sm-4 pb-3 pt-3">
          <div className="float-left d-flex flex-column align-items-center">
            <ItemBox item={item} displayText={true} displayActions={false} />
          </div>
          <div className="float-left d-flex pt-2">
            <ForgeImage
              src={hammerSvg}
              alt="forger boutton"
              canBeCrafted={canBeCrafted}
              onClick={() => canBeCrafted ? this.props.onClick(item) : null}
            />
          </div>
        </div>
        <SubTitle className="col-sm-12 float-left d-flex flex-column align-items-center pb-2">Composants nécéssaires</SubTitle>
        <br />
        {_.map(item.itemsToCraft, (craft, index) => (
          <div key={index} className={`col-sm-${item.itemsToCraft.length > 4 ? 3 : 12 / item.itemsToCraft.length} float-left d-flex flex-column align-items-center`}>
            <ItemBox
              item={craft.item}
              displayText={true}
              displayActions={false}
              withOpacity={this.getOwnedItems(craft.item) < craft.amount}
            />
            <div>(x{craft.amount})</div>
            {this.getOwnedItems(craft.item) >= craft.amount && (
              <div className="text-success">(Possède x{this.getOwnedItems(craft.item)})</div>
            )}
            {this.getOwnedItems(craft.item) < craft.amount && (
              <div className="text-danger">(Manque x{craft.amount - this.getOwnedItems(craft.item)})</div>
            )}
          </div>
        ))}
      </>
    );
  }
}

ItemCrafting.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.number,
    level: PropTypes.number,
    type: PropTypes.string,
    rarity: PropTypes.string,
    equipped: PropTypes.bool,
    itemsToCraft: PropTypes.arrayOf(PropTypes.shape({
      amount: PropTypes.number,
      item: PropTypes.shape({}),
    }))
  }),
  characterItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.number,
    level: PropTypes.number,
    type: PropTypes.string,
    rarity: PropTypes.string,
    equipped: PropTypes.bool,
  })),
}

export default ItemCrafting;
