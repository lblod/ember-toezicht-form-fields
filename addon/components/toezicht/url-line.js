import Component from '@ember/component';
import layout from '../../templates/components/toezicht/url-line';

export default Component.extend({
  layout,
  tagName: "tr",
  actions: {
    delete(address){
      this.onDelete(address);
    },
  }
});

