import { byAttrVal, byBooleanAttrVal, byContent, byJsonAttrVal, createCustomElement, DOMModel, registerEvent } from '@adobe/react-webcomponent';
import UIExample from '../components/UIExample';

class Model extends DOMModel {
	@byAttrVal() text;
	@byBooleanAttrVal() checked;
	@byJsonAttrVal() object;
	@byContent() children;
	@registerEvent("change") change;	
}
window.customElements.define('ui-example', createCustomElement(UIExample, Model, 'container'));
