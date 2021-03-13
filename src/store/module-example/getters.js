export function works(state) {
  return state.works;
}

export function getWorkByURLName(state) {
  return URLName => {
    return state.works.find(work => work.URLName == URLName) || {};
  };
}
