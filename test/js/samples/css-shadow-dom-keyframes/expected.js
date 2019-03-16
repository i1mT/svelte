/* generated by Svelte vX.Y.Z */
import { SvelteElement, createElement, detachNode, init, insert, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	var div;

	return {
		c() {
			div = createElement("div");
			div.textContent = "fades in";
			this.c = noop;
		},

		m(target, anchor) {
			insert(target, div, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

class SvelteComponent extends SvelteElement {
	constructor(options) {
		super();

		this.shadowRoot.innerHTML = `<style>div{animation:foo 1s}@keyframes foo{0%{opacity:0}100%{opacity:1}}</style>`;

		init(this, { target: this.shadowRoot }, null, create_fragment, safe_not_equal, []);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}

	static get observedAttributes() {
		return [];
	}
}

customElements.define("custom-element", SvelteComponent);

export default SvelteComponent;