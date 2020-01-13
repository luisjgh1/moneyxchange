/* eslint-disable */

jest.doMock("react", () => {
  const React = require.requireActual("react");
  return {
    ...React,
    useEffect: React.useLayoutEffect,
    useState: jest.fn().mockImplementation(init => React.useState(init))
  };
});
