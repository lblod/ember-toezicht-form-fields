import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { triplesForPath,
         validationResultsForField,
         updateSimpleFormValue} from '../../../../utils/import-triples-for-form';
import { SKOS } from '../../../../utils/namespaces';
import rdflib from 'ember-rdflib';

export default class FormInputFieldsConceptSchemeSelectorEditComponent extends Component {
  @tracked
  selected = null;

  @tracked
  options = [];

  @tracked
  errors = [];

  storeOptions = {};

  @action
  loadData(){
    //this is passed to validations and other util functions
    this.storeOptions = {
      formGraph: this.args.graphs.formGraph,
      sourceNode: this.args.sourceNode,
      sourceGraph: this.args.graphs.sourceGraph,
      metaGraph: this.args.graphs.metaGraph,
      store: this.args.formStore,
      path: this.args.field.rdflibPath
    };

    this.loadOptions();
    this.loadValidations();
    if(this.errors.length == 0){
      //do something if validated scraped
      this.selectValidValue();
    }
  }

  loadOptions(){
    //Selects all options that match the concept scheme from the form turtle
    const conceptScheme=JSON.parse(this.args.field.options).conceptScheme;
    this.options = this.args.formStore
      .match( undefined,
              SKOS('inScheme'),
              new rdflib.namedNode(conceptScheme),
              this.args.graphs.metaGraph)
      .map(s => {
        const label = this.args.formStore.any(s.subject, SKOS('prefLabel'), undefined, this.args.graphs.metaGraph);
        return { subject: s.subject, label: label && label.value };
      });

    this.options.sort(function(a, b) {
      var textA = a.label.toUpperCase();
      var textB = b.label.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

  loadValidations(){
    this.errors = validationResultsForField(this.args.field.uri, this.storeOptions).filter(r => !r.valid);
  }

  findOption(namedNode){
    return this.options.find((e)=>{
      return namedNode.equals(e.subject);
    });
  }

  cleanStore(){
    const toRemove = triplesForPath(this.storeOptions, true).values.filter(this.findOption.bind(this));
    toRemove.forEach( r => {
      updateSimpleFormValue(this.storeOptions, undefined, r);
    });
  }

  @action
  updateSelection(option){
    //Do something @onChange
    this.cleanStore();
    this.errors = [];
    this.selected = option;
    updateSimpleFormValue(this.storeOptions, option.subject);
  }

  @action
  selectValidValue(){
    //assumes valid input
    // This means even though we can have multiple values for one path (e.g. rdf:type)
    // this selector will only accept one value, and we take the first value from the matches.
    // that is also in the the options list. Our validation makes sure the matching value is the sole one.
    const matches = triplesForPath(this.storeOptions, true).values;
    this.selected = this.options.find((e)=>{
      return matches.find(m => m.equals(e.subject));
    });
  }
}
