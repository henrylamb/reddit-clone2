// import testing function 
import {Footer} from '../components/footer';
import {shallow} from 'enzyme'; // not using mount as i remember one article saying that mount is very nearly not ever needed -= thus i have used the better alternative which is shallow


// testing the components are rendering: 

describe('does the footer render', () => {

    describe('does the component render as intended', () => {
         it('comparison of JSON data', () => {
         // use TDD methods: 

         // set up
         const footer = shallow(<Footer />);
         // create comparison value
         // const jsonFooter = footer.toJSON(); // not sure why this is needed 
         // compare the imported value against the comparison value:
         expect(footer).toMatchSnapshot();
        }) 
    })
}) // end of footer tests