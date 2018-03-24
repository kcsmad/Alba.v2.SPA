import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import * as LogHome from '../components/log-home';

Enzyme.configure ({ adapter: new Adapter() });

describe('Log Home Tests', () => {
   it('should render without errors', () => {
      const wrapper = Enzyme.shallow(<LogHome />);
      const hai = <div>Hai</div>;
      expect(wrapper.contains(hai)).equals(hai);
   });
});