import './DOM-polyfill';
import { createCell } from 'web-cell';
import { assertLooksLike } from 'snabbdom-looks-like';

import { TabList } from '../source';

describe('Tab List', () => {
    it('should render a Tab List with "tabs" style', () => {
        assertLooksLike(
            TabList.prototype.render.call({
                UID: 'sample',
                mode: 'tabs',
                direction: 'row',
                list: [
                    { title: 'Test', content: 'test' },
                    { title: 'Example', content: 'example', disabled: true }
                ],
                activeIndex: 0,
                renderHeader: TabList.prototype.renderHeader
            }),
            <main className="d-flex flex-column">
                <nav
                    className="nav flex-row nav-tabs"
                    role="tablist"
                    aria-orientation="horizontal"
                >
                    <a
                        className="nav-item nav-link text-nowrap active"
                        id="sample_h_0"
                        href="#sample_b_0"
                        aria-disabled="false"
                        role="tab"
                        aria-controls="sample_b_0"
                        aria-selected="true"
                        data-index="0"
                    >
                        Test
                    </a>
                    <a
                        className="nav-item nav-link text-nowrap disabled"
                        id="sample_h_1"
                        href="#sample_b_1"
                        tabIndex={-1}
                        aria-disabled="true"
                        role="tab"
                        aria-controls="sample_b_1"
                        aria-selected="false"
                        data-index="1"
                    >
                        Example
                    </a>
                </nav>
                <div className="tab-content">
                    <section
                        className="tab-pane fade active show"
                        id="sample_b_0"
                        role="tabpanel"
                        aria-labelledby="sample_h_0"
                    >
                        test
                    </section>
                    <section
                        className="tab-pane fade"
                        id="sample_b_1"
                        role="tabpanel"
                        aria-labelledby="sample_h_1"
                    >
                        example
                    </section>
                </div>
            </main>
        );
    });

    it('should render a Tab List with horizontal "list" style', () => {
        assertLooksLike(
            TabList.prototype.render.call({
                UID: 'sample',
                mode: 'list',
                direction: 'row',
                list: [
                    { title: 'Test', content: 'test', disabled: true },
                    { title: 'Example', content: 'example' }
                ],
                activeIndex: 1,
                renderHeader: TabList.prototype.renderHeader
            }),
            <main className="d-flex flex-column">
                <div
                    className="list-group list-group-horizontal"
                    role="tablist"
                >
                    <a
                        className="list-group-item list-group-item-action text-nowrap disabled"
                        id="sample_h_0"
                        href="#sample_b_0"
                        tabIndex={-1}
                        aria-disabled="true"
                        role="tab"
                        aria-controls="sample_b_0"
                        aria-selected="false"
                        data-index="0"
                    >
                        Test
                    </a>
                    <a
                        className="list-group-item list-group-item-action text-nowrap active"
                        id="sample_h_1"
                        href="#sample_b_1"
                        aria-disabled="false"
                        role="tab"
                        aria-controls="sample_b_1"
                        aria-selected="true"
                        data-index="1"
                    >
                        Example
                    </a>
                </div>
                <div className="tab-content">
                    <section
                        className="tab-pane fade"
                        id="sample_b_0"
                        role="tabpanel"
                        aria-labelledby="sample_h_0"
                    >
                        test
                    </section>
                    <section
                        className="tab-pane fade active show"
                        id="sample_b_1"
                        role="tabpanel"
                        aria-labelledby="sample_h_1"
                    >
                        example
                    </section>
                </div>
            </main>
        );
    });
});
