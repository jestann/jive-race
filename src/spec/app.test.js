import React from 'react'
import { shallow } from 'enzyme'
import App from './../components/app'

it('renders without crashing', () => {
  shallow(<App />)
})

/*
it("always renders a div", () => {
  const divs = lockScreen().find("div");
  expect(divs.length).toBeGreaterThan(0);
});

let props;
  let mountedLockScreen;
  const lockScreen = () => {
    if (!mountedLockScreen) {
      mountedLockScreen = mount(
        <LockScreen {...props} />
      );
    }
    return mountedLockScreen;
  }

  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
    mountedLockScreen = undefined;
  });

it("always renders a div", () => {
  const divs = lockScreen().find("div");
  expect(divs.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = lockScreen().find("div");
    // When using .find, enzyme arranges the nodes in order such
    // that the outermost node is first in the list. So we can
    // use .first() to get the outermost div.
    const wrappingDiv = divs.first();

    // Enzyme omits the outermost node when using the .children()
    // method on lockScreen(). This is annoying, but we can use it
    // to verify that wrappingDiv contains everything else this
    // component renders.
    expect(wrappingDiv.children()).toEqual(lockScreen().children());
  });
});

it("always renders a `ClockDisplay`", () => {
  expect(lockScreen().find(ClockDisplay).length).toBe(1);
});

describe("rendered `ClockDisplay`", () => {
  it("does not receive any props", () => {
    const clockDisplay = lockScreen().find(ClockDisplay);
    expect(Object.keys(clockDisplay.props()).length).toBe(0);
  });
});

describe("when `onUnlocked` is defined", () => {
  beforeEach(() => {
    props.onUnlocked = jest.fn();
  });

  it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
    const slideToUnlock = lockScreen().find(SlideToUnlock);
    expect(slideToUnlock.props().onSlide).toBe(props.onUnlocked);
  });
});

describe("when `onUnlocked` is undefined", () => {
  beforeEach(() => {
    props.onUnlocked = undefined;
  });

  it("sets the rendered `SlideToUnlock`'s `onSlide` prop to undefined'", () => {
    const slideToUnlock = lockScreen().find(SlideToUnlock);
    expect(slideToUnlock.props().onSlide).not.toBeDefined();
  });
});

*/

it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3)
})

// TEST

// what it renders + what it passes to them
// props it receives + what does with them
// state it holds + when updates
// user input + callbacks
// context
// life cycle side effects: what happens when mounted/unmounted?


/* 
// EXAMPLES

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  
it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <h2>Welcome to React</h2>
  // expect(wrapper.contains(welcome)).to.equal(true)
  expect(wrapper.contains(welcome)).toEqual(true)
})

it('renders three <Foo /> components', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).to.have.length(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).to.have.length(1);
});

it('renders children when passed in', () => {
  const wrapper = shallow((
    <MyComponent>
      <div className="unique" />
    </MyComponent>
  ));
  expect(wrapper.contains(<div className="unique" />)).to.equal(true);
});

it('simulates click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});

it('allows us to set props', () => {
  const wrapper = mount(<Foo bar="baz" />);
  expect(wrapper.props().bar).to.equal('baz');
  wrapper.setProps({ bar: 'foo' });
  expect(wrapper.props().bar).to.equal('foo');
});

it('simulates click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = mount((
    <Foo onButtonClick={onButtonClick} />
  ));
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});

it('calls componentDidMount', () => {
  sinon.spy(Foo.prototype, 'componentDidMount');
  const wrapper = mount(<Foo />);
  expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  Foo.prototype.componentDidMount.restore();
});

*/