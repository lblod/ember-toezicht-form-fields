import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/date/edit';
import { oneWay } from '@ember/object/computed';
import { observer } from '@ember/object';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';

export default Component.extend( InputField, {
  layout,
  //TODO: extract properties from options
  placeholder: '01-01-2019',
  datePickerClass: 'date-picker-mandataris-edit',
  dateFormat: 'DD-MM-YYYY',

  internalValue: oneWay('value'),

  valueObserver: observer('internalValue', function() {
    this.updateValue( this.internalValue );
  })
});
