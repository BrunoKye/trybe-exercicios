function searchStarted() {
  return { type: 'SEARCH_START' };
}

function searchSuccessful(character) {
  return {
    type: 'SEARCH_SUCCESS',
    character,
  };
}

function searchFailure(error) {
  return {
    type: 'SEARCH_ERROR',
    error,
  };
}

export function fetchCharacter(name) {
  // return (dispatch) => {
  //   dispatch(searchStarted());
  //   fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
  //     .then(response => response.json())
  //     .then(data => dispatch(searchSuccessful(data)))
  //     .catch((error) => dispatch(searchFailure(error)));
  // };

  return async (dispatch) => {
    try {
      dispatch(searchStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(searchSuccessful(data))
    } catch (error) {
      dispatch(searchFailure(error))
    }
  };
}
