import React from "react";
import ChampionsList from "../containers/Champions/ChampionsList";
import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { CHAMPIONS_DATA, CHAMPIONS_DATA_HEADER } from './mockedData'


configure({ adapter: new Adapter() })
describe("Render ChampionsList", () => {
    it("render champions List page", () => {
        const championListComponent = shallow(<ChampionsList />);
        expect(toJson(championListComponent)).toMatchSnapshot()
    });

    it('renders in table rows based on provided columns', () => {
        const championListComponent = shallow(<ChampionsList
            showLoading={false}
            rowData={CHAMPIONS_DATA}
            tableHeaders={CHAMPIONS_DATA_HEADER} />);
        expect(toJson(championListComponent)).toMatchSnapshot()
    });
});