// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import '@jupyter-widgets/controls/css/labvariables.css';

(window as any).require(
  ['@jupyter-widgets/html-manager/dist/libembed-amd'],
  function (embed: { renderWidgets: { (): void; (): void } }) {
    if (document.readyState === 'complete') {
      embed.renderWidgets();
    } else {
      window.addEventListener('load', function () {
        embed.renderWidgets();
      });
    }
  }
);
