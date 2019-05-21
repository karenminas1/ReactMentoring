import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import getMovies from '../services//http-services';

        const mocData = {
            data: [{
                budget: 55000000,
                genres: ["Drama", "Romance"],
                id: 337167,
                overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
                poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
                release_date: "2018-02-07",
                revenue: 136906000,
                runtime: 106,
                tagline: "Don't miss the climax",
                title: "Fifty Shades Freed",
                vote_average: 6.1,
                vote_count: 1195
              }]
        };

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        fetch.mockResponseOnce(JSON.stringify(mocData))
        const component = shallow(<App />)
        expect(component).toMatchSnapshot();
    });

});
