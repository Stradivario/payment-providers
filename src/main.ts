import { Bootstrap } from '@rxdi/core';

import { WidgetComponent } from './app/widget.component';

window.addEventListener('load', () => {
  Bootstrap(WidgetComponent, {
    init: false,
  }).subscribe(
    () => console.log('App Started!'),
    (err) => console.error(err)
  );
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
