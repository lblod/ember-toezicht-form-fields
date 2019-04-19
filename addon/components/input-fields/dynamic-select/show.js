import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/dynamic-select/show';
import { oneWay } from '@ember/object/computed';

export default Component.extend({
  layout,
  internalValue: oneWay('value'),
  
  async didReceiveAttrs(){
    this._super(...arguments);
    let options = this.get('model.options');
    this.set('displayProperty', options.displayProperty);
  }
});
