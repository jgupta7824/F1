import React from "react";
import WinnerList from "../containers/WinnersByYear/WinnerList";
import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { RACE_DATA, RACE_DATA_HEADER } from './mockedData'


configure({ adapter: new Adapter() })
jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn(),
    connect: () => jest.fn()
}))
describe("Render winnerList", () => {
    it("render winnerList page", () => {
        const winnerListComponent = shallow(<WinnerList />);
        expect(toJson(winnerListComponent)).toMatchSnapshot()
    });

    it('renders a table rows based on provided columns', () => {
        const winnerListComponent = shallow(<WinnerList
            showLoading={false}
            rowData={RACE_DATA}
            tableHeaders={RACE_DATA_HEADER} />);
        expect(toJson(winnerListComponent)).toMatchSnapshot()
    });
});