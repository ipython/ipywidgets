import {
    DummyManager
} from './dummy-manager';

import {
    expect
} from 'chai';

import * as sinon from 'sinon';

import * as widgets from '../../lib';

function getDatepicker(parent: Element): HTMLInputElement {
    const elem = parent.querySelector('input[type="date"]')
    return <HTMLInputElement>elem;
}

describe('DatePickerView', function() {
    beforeEach(function() {
        this.manager = new DummyManager();
        const modelId = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 5);

        return this.manager.new_widget({
            model_module: 'jupyter-js-widgets',
            model_name: 'WidgetModel',
            model_id: modelId,
            widget_class: 'ipywidgets.Widget'
        }, { description: 'test-date-model'} ).then(model => {
            this.model = model;
        }).catch(err => {
            console.error('Could not create widget', Error.prototype.toString.call(err));
            if (err.stack) {
              console.error('  Trace:', err.stack);
            }
            if (err.error_stack) {
              err.error_stack.forEach((subErr, i) => console.error(`  Chain[${i}]:`, Error.prototype.toString.call(subErr)));
            }
        });
    });

    it('construction', function() {
        const options = { model: this.model };
        const view = new widgets.DatePickerView(options);
        expect(view).to.not.be.undefined;
    });

    it('initial date value', function() {
        const testDate = new Date(2017, 2, 25); // initial date value
        this.model.set('value', testDate);
        const options = { model: this.model };
        const view = new widgets.DatePickerView(options);
        view.render();
        expect(getDatepicker(view.el).valueAsDate.getTime())
            .to.equal(testDate.getTime());
    });
})