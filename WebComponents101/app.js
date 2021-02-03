const templateAccordion = document.createElement('template');
templateAccordion.innerHTML = `
	<style>
		/*
		Accordion CSS 
		*/
		.item {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
		.sub-items {
			max-height: 0px;
			overflow: hidden;
			margin:0px;
			padding-left: 10px;
		}

		.item.sub-items-show>.sub-items {
			max-height: 1200px;
		}
		.item > input {
			margin: 0;
			width: 20%;
			height: 0px;
			outline: none;
			border: none;
			z-index: 100;
			cursor: pointer;
		}
		.item > input::after {
			display: inline-block;
			width: 18px;
			height: 18px;
			content: "";
			background-repeat: no-repeat;
			background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxNCc+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTkuMTQ4IDIuMzUybC00LjE0OCA0LjE0OCA0LjE0OCA0LjE0OHEwLjE0OCAwLjE0OCAwLjE0OCAwLjM1MnQtMC4xNDggMC4zNTJsLTEuMjk3IDEuMjk3cS0wLjE0OCAwLjE0OC0wLjM1MiAwLjE0OHQtMC4zNTItMC4xNDhsLTUuNzk3LTUuNzk3cS0wLjE0OC0wLjE0OC0wLjE0OC0wLjM1MnQwLjE0OC0wLjM1Mmw1Ljc5Ny01Ljc5N3EwLjE0OC0wLjE0OCAwLjM1Mi0wLjE0OHQwLjM1MiAwLjE0OGwxLjI5NyAxLjI5N3EwLjE0OCAwLjE0OCAwLjE0OCAwLjM1MnQtMC4xNDggMC4zNTJ6Jy8+PC9zdmc+);
		}

		.item > input:checked::after {
			transform: rotate(-90deg);
		}

		.toggle {
			
		}
		.toggfter {
			width: 80%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		/*
		.toggfter::after {
			display: inline-block;
			width: 18px;
			height: 18px;
			content: "";
			background-repeat: no-repeat;
			background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxNCc+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTkuMTQ4IDIuMzUybC00LjE0OCA0LjE0OCA0LjE0OCA0LjE0OHEwLjE0OCAwLjE0OCAwLjE0OCAwLjM1MnQtMC4xNDggMC4zNTJsLTEuMjk3IDEuMjk3cS0wLjE0OCAwLjE0OC0wLjM1MiAwLjE0OHQtMC4zNTItMC4xNDhsLTUuNzk3LTUuNzk3cS0wLjE0OC0wLjE0OC0wLjE0OC0wLjM1MnQwLjE0OC0wLjM1Mmw1Ljc5Ny01Ljc5N3EwLjE0OC0wLjE0OCAwLjM1Mi0wLjE0OHQwLjM1MiAwLjE0OGwxLjI5NyAxLjI5N3EwLjE0OCAwLjE0OCAwLjE0OCAwLjM1MnQtMC4xNDggMC4zNTJ6Jy8+PC9zdmc+);
		}
		*/
		.toggle:checked ~ .sub-items {
			max-height: 10000px;
		}
	</style>

	<div class="accordion">
		<ul class="items">
			<li class="item">
				<span href="#" class="toggfter">Google</span>
				<input type="checkbox" class="toggle" />
				<ul class="sub-items">
					<li class="sub-item">abc</li>
					<li class="sub-item">cdf</li>
					<li class="sub-item">gjk</li>
				</ul>
			</li>
			<li class="item">
				<span href="#" class="toggfter">Yahoo</span>
				<input type="checkbox" class="toggle" />
				<ul class="sub-items">
					<li class="sub-item">abc</li>
					<li class="sub-item">cdf</li>
					<li class="sub-item">gjk</li>
				</ul>
			</li>
			<li class="item">
				<span href="#" class="toggfter">Bing</span>
				<input type="checkbox" class="toggle" />
				<ul class="sub-items">
					<li class="sub-item">abc</li>
					<li class="sub-item">cdf</li>
					<li class="sub-item">gjk</li>
				</ul>
			</li>
		</ul>
	</div>
	
`;
const template = document.createElement('template');
template.innerHTML = `
	
		<style>
			.grid-container {
			  display: grid;
			  grid-template-columns: 1fr 1fr  ;
			  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			  grid-gap: 10px;
			  background-color: #2196F3;
			  padding: 10px;
			}
			@media (max-width: 600px) {
			  .grid-container { grid-template-columns: repeat(2, 1fr); }
			}
			.grid-container > div {
			  border: 5px solid red;
			  background-color: #222444;
			  text-align: center;
			  padding: 20px 0;
			  font-size: 30px;
			}

			html { font-size: 22px; }
			body { padding: 1rem; }
			.cards {
			  max-width: 1200px;
			  margin: 0 auto;
			  display: grid;
			  grid-gap: 1rem;
			}
			.card {
			  background-color: dodgerblue;
			  color: white;
			  padding: 1rem;
			}
			@media (min-width: 600px) {
			  .cards { grid-template-columns: repeat(2, 1fr); }
			}
			@media (min-width: 900px) {
			  .cards { grid-template-columns: repeat(3, 1fr); }
			}

			.menu {
				display: none !important;
				visibility: hidden;
				background-color: red;
				//display: table;
				background: white;
				border-radius: 4px;
				border: 1px solid #dedede;
			}
			button {
				background: white;
				border: 0;
				outline: none;
			}
			button + .menu:active,
			button:focus + .menu {
				display: table;
				visibility: visible;
			}
			ul {
				margin: 10px;
				padding:0;
				list-style: none;
			}
			li {
				list-style-type: none;
			}

			/* Dropdown Button */
			.dropbtn {
			  background-color: #3498DB;
			  color: white;
			  padding: 16px;
			  font-size: 16px;
			  border: none;
			  cursor: pointer;
			}
			.dropbtn + .dropdown-content:active, .dropbtn:focus + .dropdown-content {
				display: block;
			} 
			/* Dropdown button on hover & focus */
			.dropbtn:hover, .dropbtn:focus {
			  background-color: #2980B9;
			}

			/* The container < div> - needed to position the dropdown content */
			.dropdown {
			  position: relative;
			  display: inline-block;
			}

			/* Dropdown Content (Hidden by Default) */
			.dropdown-content {
			  display: none;
			  position: absolute;
			  background-color: #f1f1f1;
			  min-width: 160px;
			  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			  z-index: 1;
			}

			/* Links inside the dropdown */
			.dropdown-content a {
			  color: black;
			  padding: 12px 16px;
			  text-decoration: none;
			  display: block;
			}

			/* Change color of dropdown links on hover */
			.dropdown-content a:hover {background-color: #ddd}

			/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
			.show {display:block;}

			/*
			Accordion CSS 
			*/

			.sub-items {
				max-height: 0px;
				overflow: hidden;
				margin:0px;
			}

			item.sub-items-show>.sub-items {
				max-height: 1200px;
			}

			.toggle {
			  margin: 0;
			  display: block;
			  position: absolute;
			  width: 35px;
			  height: 27px;
			  opacity: 0;
			  
			  outline: none;
			  -webkit-appearance: none;
			  border: none;
			  
			  z-index: 100;
			  cursor: pointer;
			}
			.toggle:checked ~ .sub-items {
				max-height: 10000px;
			}
		</style>
		
		<button>☰</button>
		
		<div class="menu">
		  <ul>
			<li><i class="fas fa-clock"></i>
			  <button onclick="alert('Hello there!')">
				Display Greeting
			  </button>
			</li>
			<li><i class="fas fa-clock"></i>
			  <button onclick="print()">
				Print This Page
			  </button>
			</li>
		  </ul>
		</div>
		
		<div class="cards">
		  <div class="card">
			<div class="dropdown">
				<button class="dropbtn">Dropdown</button>
				<div id="myDropdown" class="dropdown-content">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				</div>
				</div>
			</div>
			<div class="card"></div>
			<div class="card">
				<div class="accordion">
					<ul class="items">
						<li class="item">
							<a href="google.com">Google</a>
						</li>
						<li class="item">
							<a href="#">Yahoo</a>
							<input type="checkbox" class="toggle" />
							<ul class="sub-items">
								<li class="sub-item">abc</li>
								<li class="sub-item">cdf</li>
								<li class="sub-item">gjk</li>
							</ul>
						</li>
						<li class="item"><a href="google.com">Bing</a></li>
					</ul>
				</div>
			</div>
		  <div class="card"><app-accordion/></div>
		  <div class="card">FIVE</div>
		  <div class="card">SIX</div>
		  <div class="card">SEVEN</div>
		  <div class="card">EIGHT</div>
		  <div class="card">NINE</div>
		  <div class="card">TEN</div>
		  <div class="card">ELEVEN</div>
		  <div class="card">TWELVE</div>
		</div>
`

class Accordion extends HTMLElement {
  constructor() {
    super()
    // this.addEventListener('click', () => {
      // console.log('hi')
    // })
	// const shadow = this.attachShadow({ mode: 'open' });
	this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(templateAccordion.content.cloneNode(true));
	// const mainDiv = document.createElement('div');
	// mainDiv.innerHTML = '';
	// shadow.appendChild(mainDiv);
  }
}
window.customElements.define(
  'app-accordion', 
  Accordion
);
class Layout extends HTMLElement {
  constructor() {
    super()
    // this.addEventListener('click', () => {
      // console.log('hi')
    // })
	// const shadow = this.attachShadow({ mode: 'open' });
	this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	// const mainDiv = document.createElement('div');
	// mainDiv.innerHTML = '';
	// shadow.appendChild(mainDiv);
  }
}
window.customElements.define(
  'app-layout', 
  Layout
);
class App extends HTMLElement {

  constructor() {
    super()
    // this.addEventListener('click', () => {
      // console.log('hi')
    // })
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
