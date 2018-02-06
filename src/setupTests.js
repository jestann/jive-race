import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import 'jest-enzyme'

configure({ adapter: new Adapter() })



/*

// package.json
"test": "jest --config jest.config.js"

// config.jest.js
{
    "moduleNameMapper": {
        "Clock": "<rootDir>/app/components/Clock.jsx",
        "CountdownForm": "<rootDir>/app/components/CountdownForm.jsx",
        "Countdown": "<rootDir>/app/components/Countdown.jsx"
    }
}

// to add mocks

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
*/