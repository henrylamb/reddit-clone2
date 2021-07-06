import {shallow} from 'jest-enzyme';
import {Header} from '../components/header';

// testing the header: 

describe('does the header render work', () => {
    describe('rendering the header', () => {
        //TDD development 

        //set up the imported value which will be compared
        const header = shallow(<Header/>)
        // create the comparing value - not needed with the shallow and the method that will be used 

        // compare the values
        expect(header).toMatchSnapshot(); // a flaw of testing the snapshot is that you are testing against the last value of the snapshot
    })



}); // end of the tests