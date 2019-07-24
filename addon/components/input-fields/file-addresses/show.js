import Component from '@ember/component';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import layout from '../../../templates/components/input-fields/file-addresses/show';
import { alias } from '@ember/object/computed';
import { oneWay } from '@ember/object/computed';

export default Component.extend( InputField, {
  layout,
  internalValue: oneWay('value'),
  fileAddresses: alias('internalValue')
});
