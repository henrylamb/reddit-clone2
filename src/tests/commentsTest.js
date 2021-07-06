import {shallow} from 'jest-enzyme';
import {CommentList} from '../features/comments/comments';

describe('testing the comments component', () => {

    describe('does comments render', () => {

        it('rending component', () => {
            //TDD development practice:

            //import the function or component being tested
            const commentList = shallow(<CommentList />);

            // creat the comparison value - not needed for shallow testing 

            // compare the values - in this case it will be a test between the old renition of the component render with the new one
            expect(commentList).toMatchSnapshot();
        })
    })

}) // end of testing block 