import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import _ from "lodash";
import ItemBox from "./ItemBox";

const Container = styled.div`
  max-height: 40vh;
  min-height: 40vh;
  overflow-y: scroll;
  padding-left: 30px;
 
  ${props => ( props.minusPadding && css`
    min-height: 20vh;
    padding-left: 0px;
  `)};
`

const Item = styled.div`
  margin: 15px 20px;
  
  ${props => ( props.minusPadding && css`
    margin: 5px;
  `)};
`

class ItemList extends Component {
  render() {
    const { items, onClick, minusPadding } = this.props;

    return (
      <>
        <Container className="position-relative" minusPadding={minusPadding}>
          {_.map(items, item => (
            <Item className="float-left d-flex position-relative" minusPadding={minusPadding} key={item.id}>
              <div onClick={() => onClick ? onClick(item) : null}>
              <ItemBox item={item} oldItem={!item.equipped ? _.find(items, { type: item.type, equipped: true }) : null} displayText={false} {...this.props} />
              </div>
            </Item>
          ))}
        </Container>
      </>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.number,
    level: PropTypes.number,
    type: PropTypes.string,
    rarity: PropTypes.string,
    equipped: PropTypes.bool,
  })),
  minusPadding: PropTypes.bool,
  displayActions: PropTypes.bool,
  onDeleteItem: PropTypes.func,
  onChangeEquippedItem: PropTypes.func,
  onClick: PropTypes.func,
}

export default ItemList;
