import React, { Component } from "react";
import Avatar from "./Avatar";

export class EnemyBox extends Component {
  render() {
    // calc enemy progress bar percentage based on HP
    let percentage = (this.props.enemyHP / this.props.enemyMaxHP) * 100 + "%";

    return (
      <div id="enemy-container">
        {/* ENEMY POKEMON INFO BOX */}
        <div id="enemy-info-box">
          <div className="justify-content-between align-items-center">
            <h2>{this.props.enemyName}</h2>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="progress both-progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: percentage }}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <div className="hp-progress-bar">
                <span>{this.props.enemyHP}/{this.props.enemyMaxHP}</span>
              </div>
            </div>
          </div>
        </div>
        {/* END ENEMY POKEMON INFO BOX */}
        <div className="enemy-intention">
          <i className="fas fa-shield-alt"/>
        </div>
        {/* ENEMY POKEMON AVATAR PICTURE */}
        <div className="mr-sm-4 avatar-box">
          <Avatar
            faint={this.props.enemyFaint}
            isHit={this.props.enemyIsHit}
            logoName={this.props.enemyName.toLowerCase()}
            className="avatar ml-3 mt-3"
          />
          <div className="oval" />
        </div>
        {/* END ENEMY POKEMON AVATAR PICTURE */}
      </div>
    );
  }
}

export default EnemyBox;
