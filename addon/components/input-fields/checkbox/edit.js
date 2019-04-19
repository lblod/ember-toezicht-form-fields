import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import layout from '../../../templates/components/input-fields/checkbox/edit';

export default Component.extend({
  layout,
  internalValue: oneWay('value'),

  activeInputStates: computed( function() {
    return [];
  }),

  actions: {
    toggleValue() {
      this.updateValue( !this.get('internalValue') );
    }
  }
});
