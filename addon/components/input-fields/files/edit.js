import Component from '@ember/component';
import InputField from '@lblod/ember-mu-dynamic-forms/mixins/input-field';
import layout from '../../../templates/components/input-fields/files/edit';
import { oneWay, alias } from '@ember/object/computed';

export default Component.extend( InputField, {
  layout,
  internalValue: oneWay('value'),
  files: alias('internalValue'),

  actions: {
    addFile(file) {
      this.files.pushObject(file);
      this.updateValue(this.files);
    },

    deleteFile(file) {
      this.files.removeObject(file);
      this.updateValue(this.files);
    }
  }
});
