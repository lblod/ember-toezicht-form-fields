import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/vlabel-opcentiem/edit';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import { oneWay, reads, notEmpty } from '@ember/object/computed';

export default Component.extend(InputField, {
  layout,
  store: service(),
  taxRates: oneWay('value'),
  inzendingVoorToezicht: reads('solution.inzendingVoorToezicht'),
  differentiatie: reads('inzendingVoorToezicht.hasExtraTaxRates'),
  hasSimplifiedTaxRates: notEmpty('taxRates'),

  didReceiveAttrs() {
    this._super(...arguments);
  },

  activeInputStates: computed( 'inputStates.[]', 'value', function() {
    debugger
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
  } ),

  actions: {
    async toggleValue(){
      (await this.inzendingVoorToezicht).set('hasExtraTaxRates', !this.differentiatie);
    },

    async create(){
      let taxRate =this.store.createRecord('simplified-tax-rate');
      await taxRate.save();
      this.taxRates.pushObject(taxRate);
    },

    async delete(taxRate){
      this.taxRates.removeObject(taxRate);
      await taxRate.destroy();
    }
  }
});
