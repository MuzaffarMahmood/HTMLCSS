class Layout extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', () => {
      console.log('hi')
    })
	const shadow = this.attachShadow({ mode: 'open' });
	const mainDiv = document.createElement('div');
	mainDiv.innerHTML = `
        <h3>Layout</h3>        
      `;
	shadow.appendChild(mainDiv);
  }
}
window.customElements.define(
  'app-layout', 
  Layout
);
class App extends HTMLElement {

  constructor() {
    super()
    this.addEventListener('click', () => {
      console.log('hi')
    })
	const shadow = this.attachShadow({ mode: 'open' });
	const mainDiv = document.createElement('div');
	let h2 = document.createElement('h2');
	h2.innerHTML = "Test";
	let layout = document.createElement('app-layout');
	mainDiv.appendChild(h2);
	mainDiv.appendChild(layout);
	shadow.appendChild(mainDiv);
  }

  // The connectedCallback() runs each time the element is added to the DOM
  connectedCallback() {
  }

  // Called every time the element is removed from the DOM. Useful for running clean up code.
  disconnectedCallback() {}

  // When the element is either removed from the DOM, or moved to a different page:
  adoptedCallback() {} 

}

window.customElements.define(
  'app-comp', 
  App
);
