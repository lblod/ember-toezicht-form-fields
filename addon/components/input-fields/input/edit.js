import layout from '../../../templates/components/input-fields/input/edit';
import InputFieldComponent from '@lblod/ember-mu-dynamic-forms/components/input-fields/input/edit';
import { oneWay } from '@ember/object/computed';

export default InputFieldComponent.extend({
  layout,
  classNames: 'u-spacer--bottom--small',
  internalValue: oneWay('value'),
  
    actions: {
      update() {
        this.updateValue( this.internalValue );
      }
    }
});