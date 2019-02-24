
/*
*   React Game Store 200 - enzyme config
*   author: Aurélien Dupays Dexemple
*/

import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });