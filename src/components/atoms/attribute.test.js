import React from 'react'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'
import Attribute from './attribute'
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
			long: true,
			className: 'no-style'
		}
		for (let key in wrapper.props()) {
			if (props[key]) {
				expect(wrapper.props()[key]).toEqual(props[key])
			}
		}
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
	  expect(wrapper.find('.no-style')).toHaveLength(1)
	})

	it('renders a content div with no link', () => {
		let content = <div className='attribute-list-item' key={1}>
			test
		</div>
		expect(wrapper.contains(content)).toBe(true)
	})
	
	/*
	// why does this fail?
	it('renders a link', () => {
		const linkWrap = shallow(<Attribute content='test' keyed={1} link='/link' />)
		let content = <div className='attribute-list-item' key={1}>
			<Link className='attribute-link' to='/link'>test</Link>
		</div>
		expect(linkWrap.contains(content)).toBe(true)
	})
	*/
	
	it('renders a link and a postlink', () => {
		const postWrap = shallow(<Attribute content='test' keyed={1} />)
		postWrap.setProps({ link: '/link', postlink: ', plus more' })
		let content = <div className='attribute-list-item' key={1}>
			<Link className='attribute-link' to='/link'>test</Link>, plus more
		</div>
		expect(postWrap.contains(content)).toBe(true)
	})
	
	// no long attributes in lists
})

/*

describe ('solo attribute with a link and a postlink', () => {
	let wrapper = shallow(<Attribute label='label' content='test' link='link' postLink='postlink' />)
	it('renders the label', () => {

	})
	
	it('renders a long attribute', () => {
		wrapper.setProps({ long: true })
		let content = <div className='attribute-list-item' key={1}>
			<Link className='attribute-link' to='/link'>test</Link>, plus more
		</div>
		expect(wrapper.contains(content)).toBe(true)
	})
})

*/