import React from 'react'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'
import Attribute from './../components/atoms/attribute'
/* global expect */

describe('general attribute', () => {
	it('renders without crashing', () => {
	  shallow(<Attribute />)
	})
	
	it('receives all its props', () => {
		let wrapper = shallow(<Attribute content='test' label='label' link='/link' postlink=', and more' keyed={1} long={true} />)
		let props = {
			content: 'test',
			label: 'label',
			link: '/link',
			postlink: ', and more',
			keyed: 1,
			long: true
		}
		expect(wrapper.props()).toEqual(props)
	})
	
	it('always renders a content div', () => {
		let wrapper = shallow(<Attribute content='test' />)
		let content = <div className='attribute-short'>test</div>
		expect(wrapper.contains(content)).toBe(true)
	})
})

describe ('attribute in a list', () => {
	const wrapper = shallow(<Attribute content='test' keyed={1} />)
	
	it('renders the top-level div with a no-style class', () => {
	  expect(wrapper.find('.no-style')).to.have.length(1)
	})

	it('renders a content div in an empty Link', () => {
		let content = <div className='attribute-list-item' key={1}>
			<Link className='attribute-link' to=''>test</Link>
		</div>
		expect(wrapper.contains(content)).toBe(true)
	})
	
	it('renders a content link', () => {
		wrapper.setProps({ link: '/link' })
		let content = <div className='attribute-list-item' key={1}>
			<Link className='attribute-link' to='/link'>test</Link>
		</div>
	})
	
	it('renders a postlink', () => {
		wrapper.setProps({ postlink: ', plus more' })

	})
	
	it('renders a long attribute', () => {
		wrapper.setProps({ long: true })
		
	})
})

describe ('solo attribute with a link and a postlink', () => {
	let wrapper = shallow(<Attribute label='label' content='test' link='link' postLink='postlink' />)
	it('renders the label', () => {
		
	})
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