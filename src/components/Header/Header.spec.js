import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from './Header';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render correctly', () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe('Gradients');
});
// -------------------------
// import { mount } from 'enzyme';
// import Header from './Header';
// // my additions
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('Header', () => {
//   it('should render correctly', () => {
//     const wrapper = mount(<Header />);
//     expect(wrapper.exists()).toBeTruthy();
//   });
// });
// -------------------------
