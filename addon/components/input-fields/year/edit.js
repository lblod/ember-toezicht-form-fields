import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import layout from '../../../templates/components/input-fields/year/edit';

export default Component.extend({
  layout,
  internalValue: oneWay('value'),

  actions: {
    update() {
      this.updateValue( this.internalValue );
    }
  }
});
