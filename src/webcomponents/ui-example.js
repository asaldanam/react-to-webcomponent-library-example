import UIExample from '../components/UIExample';
import { createCustomElement, DOMModel, byAttrVal, byBooleanAttrVal, byJsonAttrVal, byContent, registerEvent } from '@adobe/react-webcomponent';
import UIExampleB from '../components/UIExampleB';

class Model extends DOMModel {
	@byAttrVal() text;
	@byBooleanAttrVal() checked;
	@byJsonAttrVal() object;
	@byContent() children;
	@registerEvent("change") change;	
}
window.customElements.define('ui-example', createCustomElement(UIExample, Model, 'element'));

window.customElements.define('ui-example-b', createCustomElement(UIExampleB, Model, 'element'));
