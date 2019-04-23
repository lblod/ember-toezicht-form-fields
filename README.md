toezicht-form-fields
==============================================================================

This addon provides input-field components such as checkbox, date, ... and is primarily made to be used in the toezicht app (https://github.com/lblod/frontend-toezicht-abb) and the loket app (https://github.com/lblod/frontend-loket). This addon also serves toezicht specific component like url-box and url-line.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install @lblod/ember-toezicht-form-fields
```

Prerequisites
------------------------------------------------------------------------------
This addon consumes two external services in some of its components:
- toezicht/form-version-tracker
  This service is utilized by the loket app and is defined at https://github.com/lblod/frontend-loket/blob/development/app/services/toezicht/form-version-tracker.js
- current-session
  This service is utilized by the toezicht app and is defined at https://github.com/lblod/frontend-toezicht-abb/blob/master/app/services/current-session.js

Usage
------------------------------------------------------------------------------

This addon provides this set of components
- input-fields
  A bunch of these components are extension from the same components in the @lblod/ember-mu-dynamic-forms addon. So, you may refer to the usage instructions of that addon at https://www.npmjs.com/package/@lblod/ember-mu-dynamic-forms.
  - checkbox
  - date
  - dynamic-select
  - input
  - taxrates
  - text
  - toezicht-besluit-type-select
  - toezicht-bestuursorgaan-select
  - year
- toezicht
  - url-box
    Used like {{toezicht/url-box urls=fileAddresses disabled=isSent onDelete=(action "deleteFileAddress")}} where fileAddresses is an array of FileAddress objects defined at https://github.com/lblod/app-digitaal-loket/blob/84caf8ebba03a17e925c7ab55ea95708cd7f57dc/config/resources/master-files-domain.lisp#L24.
  - url-line


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
