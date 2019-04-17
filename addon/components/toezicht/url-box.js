import Component from '@ember/component';
import layout from '../../templates/components/toezicht/url-box';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  store: service(),
  disabled: false,

  actions: {
    addUrlField() {
      let address = this.store.createRecord('file-address');
      this.urls.pushObject(address);
    },

    delete(address){
      this.onDelete(address);
    }
  }
});
