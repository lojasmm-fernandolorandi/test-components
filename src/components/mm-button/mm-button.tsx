/* eslint-disable @stencil-community/ban-default-true */
/* eslint-disable @stencil-community/own-methods-must-be-private */
/* eslint-disable @stencil-community/required-jsdoc */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mm-button',
  styleUrl: 'mm-button.css',
  shadow: true,
})
export class MmButton {
  @Prop() text: string;
  @Prop() appearence: string;

  // @Prop() icons: string;

  // @State() _icons: Array<any>;

  // arrayDataWatcher(icons) {
  //   if (typeof icons === 'string') {
  //     this._icons = JSON.parse(icons);
  //   } else {
  //     this._icons = icons;
  //   }
  // }

  // componentWillLoad() {
  //   this.arrayDataWatcher(this.icons);
  // }

  render() {
    return (
      <button class={`btn ${this.appearence}`} type="button">
        {/* <div class="left-icon">
          <img src={getAssetPath(`./icons/${this.icons}`)} alt="" />
        </div> */}
        {/* slots */}
        {this.text}
      </button>
    );
  }
}
