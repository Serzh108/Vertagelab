import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import GradientBlock from './GradientBlock';

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
  const item = { start: '#fff', end: '#000' };
  act(() => {
    render(<GradientBlock item={item} />, container);
  });
  expect(container.textContent).toBe('Start: #fffEnd: #000');
});
// -------------------------
// import { mount } from 'enzyme';
// import GradientBlock from './GradientBlock';
// import styles from './GradientBlock.module.css';
// // my additions
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('GradientBlock', () => {
//   it('should render correctly', () => {
//     const wrapper = mount(<GradientBlock />);
//     expect(wrapper.exists()).toBeTruthy();
//   });

//   it('should render span', () => {
//     const item = { start: '#fff', end: '#000' };
//     const wrapper = mount(<GradientBlock item={item} />);
//     expect(wrapper.find(`${styles.itemText}`).text()).toEqual('Start: #fff');
//   });
// });
