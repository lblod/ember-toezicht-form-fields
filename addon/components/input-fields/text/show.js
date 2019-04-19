import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import layout from '../../../templates/components/input-fields/text/show';

export default Component.extend({
  layout,
  internalValue: oneWay('value')
});