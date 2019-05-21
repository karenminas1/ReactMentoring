/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
window.fetch = require('jest-fetch-mock');

configure({ adapter: new Adapter() });