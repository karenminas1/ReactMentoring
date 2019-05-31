import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('<Movie />', () => {
    it('should render correctly', () => {
        const component = shallow(<Movie />)
        expect(component).toMatchSnapshot();
    });
});
