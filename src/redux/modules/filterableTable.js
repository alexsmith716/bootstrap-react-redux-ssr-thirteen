// Actions
// -------------------
const LOAD = 'redux-example/filterableTable/LOAD';
const LOAD_SUCCESS = 'redux-example/filterableTable/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/filterableTable/LOAD_FAIL';

const DROPDOWN_CHANGE = 'redux-example/filterableTable/DROPDOWN_CHANGE';
const FILTER_TEXT_CHANGE = 'redux-example/filterableTable/FILTER_TEXT_CHANGE';
const IN_STOCK_CHANGE = 'redux-example/filterableTable/IN_STOCK_CHANGE';

// MOUNT:
// >>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > SELECTED_OPTION > state:
// >>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > SELECTED_OPTION > action:

const initialState = {
  loaded: false,
  data: null,
  // didInvalidate: false,
};

// Reducer
// -------------------
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {

    case DROPDOWN_CHANGE:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > DROPDOWN_CHANGE > state: ', state);
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > DROPDOWN_CHANGE > action: ', action);
      return {
        ...state,
        loading: true,
        dropDownOptionSelected: action.value,
      };

    case FILTER_TEXT_CHANGE:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > FILTER_TEXT_CHANGE > state: ', state);
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > FILTER_TEXT_CHANGE > action: ', action);
      return {
        ...state,
        filterText: action.value,
      };

    case IN_STOCK_CHANGE:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > IN_STOCK_CHANGE > state: ', state);
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > IN_STOCK_CHANGE > action: ', action);
      return {
        ...state,
        inStockOnly: action.value,
      };

    case LOAD:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > LOAD > state: ', state);
      return {
        ...state,
        loading: true,
      };

    case LOAD_SUCCESS:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > LOAD_SUCCESS > state: ', state);
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > LOAD_SUCCESS > action: ', action);
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        errorResponse: {message:'', documentation_url:''},
        filterText: '',
        inStockOnly: null,
        data: action.result,
      };

    case LOAD_FAIL:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > LOAD_FAIL > action: ', action);
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: true,
        errorResponse: {message: action.error.message, documentation_url: action.error.documentation_url},
      };

    default:
      console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > SWITCH > action.type > default > state: ', state);
      return state;
  }
};

// Actions (action creators)
// an action is a JavaScript object that has a 'type' and an optional 'payload' (data)
// -------------------
export function load(value) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(value.request)
  };
};

export function actionHandleDropdownChange(prop) {
  console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > actionHandleDropdownChange: ', prop);
  return {
    type: DROPDOWN_CHANGE,
    value: prop.data
  };
};

export function actionFilterTextChange(prop) {
  console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > actionFilterTextChange: ', prop);
  return {
    type: FILTER_TEXT_CHANGE,
    value: prop.data
  };
};

export function actionInStockChange(prop) {
  console.log('>>>>>>>>>>>>>>>> filterableTable > reducer > actionInStockChange: ', prop);
  return {
    type: IN_STOCK_CHANGE,
    value: prop.data
  };
};
