import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


afterEach(cleanup);

test('renders learn react link', () => {
  function tree() {
    return render(
      <Router>
        <App/>
      </Router>
    )
  }

  it('should match with snapshot', () => {
    expect(tree()).toMatchSnapshot();
  });

});
