import Component from '@ember/component';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import layout from '../../../templates/components/input-fields/files/show';
import { alias, oneWay } from '@ember/object/computed';

export default Component.extend( InputField, {
  layout,
  internalValue: oneWay('value'),
  files: alias('internalValue')
});
