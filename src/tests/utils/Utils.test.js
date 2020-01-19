import Utils from '../../utils/index';

describe('Utils', () => {
  test('should get CV sections', () => {
    const expectedSections = [
      'experience',
      'education',
      'volunter experience',
      'skills'
    ]

    expect(Utils.getSections()).toEqual(expectedSections);
  })
  
});
