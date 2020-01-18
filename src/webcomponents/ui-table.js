import { createCustomElement, DOMModel, byAttrVal } from '@adobe/react-webcomponent';
import UITable from '../components/UITable';


class TableModel extends DOMModel {	
  	@byAttrVal() text;
}
window.customElements.define('ui-table', createCustomElement(UITable, TableModel, 'element'));
