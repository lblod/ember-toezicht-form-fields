import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/vlabel-opcentiem/show';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import { oneWay, reads, empty} from '@ember/object/computed';

export default Component.extend({
  layout,
  store: service(),
  taxRates: oneWay('value'),
  inzendingVoorToezicht: reads('solution.inzendingVoorToezicht'),
  differentiatie: reads('inzendingVoorToezicht.hasExtraTaxRates'),
  differentiatieEmpty: empty('differentiatie'),
  taxRatesEmpty: empty('taxRates'),

  showTable: computed('differentiatieEmpty', 'differentiatie', function(){
    if(this.differentiatieEmpty) return true;
    if(this.differentiatie) return false;
    return true;
  }),
  showDifferentiatie: reads('taxRatesEmpty'),

  activeInputStates: computed( 'inputStates.[]', 'value', function() {
    const inputStates = this.inputStates;

    return inputStates
      .map(function( inputState ) {
        // Yield state name for matching validations
        switch (inputState.validationName) {
          case "empty":
            return this.taxRates && this.taxRates.length == 0 && inputState.stateName;
          default:
            return undefined;
        }})
      // remove all non-truethy validation names
      .filter( (i) => i );
  } )
});
