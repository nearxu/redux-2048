const INIT_CUBES = "INIT_CUBES";
const ADD_CUBE = "ADD_CUBE";

export const initCubes = (cubes = []) => {
  return {
    type: INIT_CUBES,
    cubes
  };
};

export const addCube = cube => {
  return {
    type: ADD_CUBE,
    cube
  };
};

const cube = (state, action) => {
  if (!state) {
    state = {
      cubes: []
    };
  }
  switch (action.type) {
    case INIT_CUBES:
      return { cubes: [...action.cubes] };
    case ADD_CUBE:
      return {
        cubes: [...state.cubes, action.cube]
      };
    default:
      return state;
  }
};

export default cube;
