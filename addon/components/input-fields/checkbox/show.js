import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import { computed } from '@ember/object';
import layout from '../../../templates/components/input-fields/checkbox/show';

export default Component.extend({
  layout,
  internalValue: oneWay('value'),

  activeInputStates: computed( function() {
    return [];
  })
});
