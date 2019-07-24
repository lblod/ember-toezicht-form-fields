import Component from '@ember/component';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import layout from '../../../templates/components/input-fields/file-addresses/edit';
import { inject as service } from '@ember/service';
import { filterBy, oneWay } from '@ember/object/computed';

export default Component.extend( InputField, {
  layout,
  internalValue: oneWay('value'),
  fileAddresses: null,
  validAddresses: filterBy('fileAddresses', 'isValidAddress', true),
  store: service(),

  init() {
    this._super(...arguments);
    this.set('fileAddresses', this.internalValue.slice(0));
  },

  actions: {
    addUrlField() {
      const address = this.store.createRecord('file-address');
      this.fileAddresses.pushObject(address);
    },

    updateFileAddresses() {
      this.fileAddresses.forEach(a => a.set('address', a.address && a.address.trim()));
      this.updateValue(this.validAddresses);
    },

    delete(fileAddress) {
      this.fileAddresses.removeObject(fileAddress);
      this.updateValue(this.validAddresses);
    }
  }
});
