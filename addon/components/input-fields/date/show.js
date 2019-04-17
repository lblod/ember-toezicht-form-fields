import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/date/show';
import { oneWay } from '@ember/object/computed';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';

export default Component.extend( InputField, {
  layout,
  datePickerClass: 'date-picker-mandataris-edit',
  dateFormat: 'DD-MM-YYYY',
  internalValue: oneWay('value')
});
