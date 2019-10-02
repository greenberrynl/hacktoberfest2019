import getEdges from './index';

describe('getEdges', () => {
  it('should return edges when edges are present', () => {
    const response = {
      edges: [{ id: '1' }],
    };

    expect(getEdges(response)).toEqual([{ id: '1' }]);
  });
  it('should return an empty array when edges are present', () => {
    const response = {};
    expect(getEdges(response)).toEqual([]);
    expect(getEdges(undefined)).toEqual([]);
  });
});
