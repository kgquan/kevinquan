import { mount } from 'enzyme';
import Section from './section';

/** @test {Section Component} */
describe('Section component', () => {
    it('should render', () => {
        const wrapper = mount(<Section />);
        expect(wrapper.find('section')).toBeDefined();
        expect(wrapper.find('section')).toHaveLength(1);
    });

    it('should contain children', () => {
        const wrapper = mount(<Section>Hello!</Section>);
        expect(wrapper.find('section').text()).toEqual('Hello!');
    })
});