/* eslint-disable @stencil-community/decorators-style */
/* eslint-disable @stencil-community/required-jsdoc */
/* eslint-disable @stencil-community/strict-mutable */
/* eslint-disable @stencil-community/own-methods-must-be-private */
import { Component, h, getAssetPath, Prop, State, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'mm-modal',
  styleUrl: 'mm-modal.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MmModal {
  
  // Props
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() header: string;
  @Prop() appearence: string;
  @Prop() isopen: boolean;
  @Prop() closeIcon = 'close.svg';
  @Prop() buttons: string;

  //State for our buttons array
  @State() _buttons: Array<any>

  //Watch for data
  arrayDataWatcher(buttons) {
    if(typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons
    }
  }

  @Event() private action: EventEmitter;

  //Before the component mounts/loads, we need to converte the buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }

  //Function
  private handleCancel = () => {
    this.isopen = false
  };

  private handleAction = () => {
    this.action.emit()
  }

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}></div>
        <div class="modal">
          <div class="header">
            <h3>{this.header}</h3>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
            </div>
          </div>
          <div class="body">
            <slot>Body content</slot>
          </div>
          <div class="footer">
            {this._buttons.map((buttons, index) => (
              <mm-button onClick={index === 0 ? this.handleAction : this.handleCancel} text={buttons.text} appearence={index === 0 && this.appearence}></mm-button>
            ))}
            
          </div>
        </div>
      </div>
    );
  }
}
