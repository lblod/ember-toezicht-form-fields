import Component from '@ember/component';
import layout from '../../../templates/components/input-fields/vlabel-opcentiem/show';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import { oneWay, reads, empty, not} from '@ember/object/computed';

export default Component.extend({
  layout,
  store: service(),
  taxRates: oneWay('value'),
  inzendingVoorToezicht: reads('solution.inzendingVoorToezicht'),
  differentiatie: reads('inzendingVoorToezicht.hasExtraTaxRates'),
  taxRatesEmpty: empty('taxRates'),

  showTable: not('differentiatie'),
  showDifferentiatie: reads('taxRatesEmpty')
});
