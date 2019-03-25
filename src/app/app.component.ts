import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';

  testArraySimple = ['test', 'test', 'test'];
  testArray() {
    return ['test', 'test', 'test'].map((value) => {
      return {
        inner: value,
        prop1: value,
        prop2: value,
      }
    });
  }
}

class TestComponentPromise extends HTMLElement {

  firstRender = true;
  renderScheduled = false;

  private _internalProp1 = '';
  set prop1(value: string) {
    this._internalProp1 = value;
    if (!this.firstRender) {
      this.render();
    }
  }
  private _internalProp2 = '';
  set prop2(value: string) {
    this._internalProp2 = value;
    if (!this.firstRender) {
      this.render();
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.firstRender) {
      this.attachShadow({ mode: "open" });
    }
    this.render();
  }

  render() {
    if (!this.renderScheduled) {
      Promise.resolve().then(() => {
        if (this.firstRender) {
          this.shadowRoot.innerHTML = `<style>
          :host { 
            display: block; 
          }</style>
          <div class="first">
          </div>
          <div class="second">
          </div><slot></slot>`;
          this.firstRender = false;
        }
        this.shadowRoot.querySelector('.first').innerHTML = this._internalProp1;
        this.shadowRoot.querySelector('.second').innerHTML = this._internalProp2;
      });
    }
  }
}
window.customElements.define('test-component-promise', TestComponentPromise);

class TestComponentTimeout extends HTMLElement {

  firstRender = true;
  renderScheduled = false;

  private _internalProp1 = '';
  set prop1(value: string) {
    this._internalProp1 = value;
    if (!this.firstRender) {
      this.render();
    }
  }
  private _internalProp2 = '';
  set prop2(value: string) {
    this._internalProp2 = value;
    if (!this.firstRender) {
      this.render();
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.firstRender) {
      this.attachShadow({ mode: "open" });
    }
    this.render();
  }

  render() {
    if (!this.renderScheduled) {
      window.setTimeout(() => {
        if (this.firstRender) {
          this.shadowRoot.innerHTML = `<style>
          :host { 
            display: block; 
          }</style>
          <div class="first">
          </div>
          <div class="second">
          </div><slot></slot>`;
          this.firstRender = false;
        }
        this.shadowRoot.querySelector('.first').innerHTML = this._internalProp1;
        this.shadowRoot.querySelector('.second').innerHTML = this._internalProp2;
      });
    }
  }
}
window.customElements.define('test-component-timeout', TestComponentTimeout);

class TestComponentDirect extends HTMLElement {

  firstRender = true;

  private _internalProp1 = '';
  set prop1(value: string) {
    this._internalProp1 = value;
    if (!this.firstRender) {
      this.render();
    }
  }
  private _internalProp2 = '';
  set prop2(value: string) {
    this._internalProp2 = value;
    if (!this.firstRender) {
      this.render();
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.firstRender) {
      this.attachShadow({ mode: "open" });
    }
    this.render();
  }

  render() {

    if (this.firstRender) {
      this.shadowRoot.innerHTML = `<style>
          :host { 
            display: block; 
          }</style>
          <div class="first">
          </div>
          <div class="second">
          </div><slot></slot>`;
      this.firstRender = false;
    }
    this.shadowRoot.querySelector('.first').innerHTML = this._internalProp1;
    this.shadowRoot.querySelector('.second').innerHTML = this._internalProp2;


  }
}
window.customElements.define('test-component-direct', TestComponentDirect);