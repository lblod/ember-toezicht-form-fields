toezicht-form-fields
==============================================================================

This addon provides input-field components such as checkbox, date, ... and is primarily made to be used in the <a href="https://github.com/lblod/frontend-toezicht-abb">toezicht app</a> and the <a href="https://github.com/lblod/frontend-loket">loket app</a>. This addon also serves toezicht specific component like url-box and url-line.


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
  This service is utilized by the loket app and is defined at <a href="https://github.com/lblod/frontend-loket/blob/development/app/services/toezicht/form-version-tracker.js">service/toezicht/form-version-tracker</a>
- current-session
  This service is utilized by the toezicht app and is defined at <a href="https://github.com/lblod/frontend-toezicht-abb/blob/master/app/services/current-session.js">services/current-session</a>.

Usage
------------------------------------------------------------------------------

This addon provides this set of components
- input-fields
  A bunch of these components are extensions of the same components in the <a href="https://www.npmjs.com/package/@lblod/ember-mu-dynamic-forms">@lblod/ember-mu-dynamic-forms</a> addon. So, you may refer to the usage instructions of that addon.
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
    Used like {{toezicht/url-box urls=fileAddresses disabled=isSent onDelete=(action "deleteFileAddress")}} where fileAddresses is an array of <a href="https://github.com/lblod/app-digitaal-loket/blob/84caf8ebba03a17e925c7ab55ea95708cd7f57dc/config/resources/master-files-domain.lisp#L24">FileAddress</a> objects.
  - url-line


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
