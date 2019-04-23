import TextEdit from '@lblod/ember-toezicht-form-fields/components/input-fields/text/edit';
import TextShow from '@lblod/ember-toezicht-form-fields/components/input-fields/text/show';
import CheckboxEdit from '@lblod/ember-toezicht-form-fields/components/input-fields/checkbox/edit';
import CheckboxShow from '@lblod/ember-toezicht-form-fields/components/input-fields/checkbox/show';
import DynamicSelectEdit from '@lblod/ember-toezicht-form-fields/components/input-fields/dynamic-select/edit';
import DynamicSelectShow from '@lblod/ember-toezicht-form-fields/components/input-fields/dynamic-select/show';
import InputEdit from '@lblod/ember-toezicht-form-fields/components/input-fields/input/edit';
import InputShow from '@lblod/ember-toezicht-form-fields/components/input-fields/input/show';
import YearEdit from '@lblod/ember-toezicht-form-fields/components/input-fields/year/edit';
import YearShow from '@lblod/ember-toezicht-form-fields/components/input-fields/year/show';

export function initialize( appInstance ) {
  appInstance.register('component:input-fields/text/edit', TextEdit);
  appInstance.register('component:input-fields/text/show', TextShow);

  appInstance.register('component:input-fields/checkbox/edit', CheckboxEdit);
  appInstance.register('component:input-fields/checkbox/show', CheckboxShow);

  appInstance.register('component:input-fields/dynamic-select/edit', DynamicSelectEdit);
  appInstance.register('component:input-fields/dynamic-select/show', DynamicSelectShow);

  appInstance.register('component:input-fields/input/edit', InputEdit);
  appInstance.register('component:input-fields/input/show', InputShow);
  
  appInstance.register('component:input-fields/year/edit', YearEdit);
  appInstance.register('component:input-fields/year/show', YearShow);
}

export default {
  initialize
};
