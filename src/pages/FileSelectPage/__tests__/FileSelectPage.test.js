import React from 'react';
import { shallow } from 'enzyme';

import SourceFile from '../../../__fixtures__/sourceFile';
import FileSelectPage from '../FileSelectPage';
import { CONVERT_FILES_PATH } from '../../../routers/paths';

describe('adding files', () => {
  const getBaseProps = () => ({
    addFilesAction: jest.fn(),
    history: { push: jest.fn() }
  });

  test('transitions to the convert files page', () => {
    const baseProps = getBaseProps();
    const files = [new SourceFile()];
    const wrapper = shallow(<FileSelectPage {...baseProps} />);

    wrapper.instance().onDrop(files);

    expect(baseProps.history.push).toHaveBeenCalledWith(CONVERT_FILES_PATH);
  });
});
