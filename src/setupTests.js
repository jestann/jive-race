import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

/*
// to add mocks

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
*/