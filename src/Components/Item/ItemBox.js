import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import ReactTooltip from "react-tooltip";
import { getColorItem } from "../../utils/itemHelper";
import ReactDOMServer from 'react-dom/server';
import ItemTooltip from "./ItemTooltip";

const Box = styled.div`
  border: 2px solid;
  background-color: #000;
  width: 60px;
  height: 60px;
`

const Text = styled.div`
  padding: 0 10px;
  display: table-cell;
  margin-top: auto;
  margin-bottom: auto;
`

class ItemBox extends Component {
  render() {
    const { item } = this.props;

    if (!item) {
      return (
        <Box style={{borderColor: "grey"}} />
      );
    }

    return (
      <>
        <Box style={{borderColor: getColorItem(item)}} data-tip={ReactDOMServer.renderToStaticMarkup(<ItemTooltip item={item} />)} data-html={true}>
          <img src="https://render-eu.worldofwarcraft.com/icons/56/inv_helm_cloth_nzothraid_d_01.jpg" alt={item.name} />
        </Box>
        <Text style={{color: getColorItem(item)}}>{item.name}</Text>
        <ReactTooltip />
      </>
    );
  }
}

ItemBox.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
    level: PropTypes.number,
    type: PropTypes.string,
    rarity: PropTypes.string,
  }),
}

export default ItemBox;