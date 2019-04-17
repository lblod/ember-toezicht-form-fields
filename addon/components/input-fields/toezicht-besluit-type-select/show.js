import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/toezicht-besluit-type-select/show';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import { oneWay } from '@ember/object/computed';

export default Component.extend( InputField, {
  layout,
  disabled: false,
  displayProperty: 'label',
  internalValue: oneWay('value')
});

