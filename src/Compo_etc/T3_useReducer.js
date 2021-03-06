export const SET_WINNER = 'SET_WINNER';
export const CLICK_TOE = 'CLICK_TOE';
export const GET_TURN = 'GET_TURN';
export const RESET_GAME = 'RESET_GAME';

export const initialState = {
  winner: '',
  latestWinner: '',
  turn: 'O',
  tabledata: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  recentcell: [-1, -1],
};

const T3_useReducer = (state, action) => {
  //   const [row,cell] = state.recentcell;

  switch (action.type) {
    case SET_WINNER:
      console.log(action);
      return {
        ...state,
        winner: action.winner,
        latestWinner: action.winner,
        tabledata: [
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
        ],
        recentCell: [-1, -1],
      };
    case CLICK_TOE:
      const tabledata = [...state.tabledata];
      //   tabledata[action.row] = [...tabledata[action.row]]; // immer라는 라이브러리로 가독성 해결
      console.log(action.row, action.cell);
      tabledata[action.row][action.cell] = state.turn;

      return {
        ...state,
        winner: '',
        tabledata,
        recentcell: [action.row, action.cell],
      };

    case GET_TURN:
      console.log(action, '전 턴상태: ' + state.turn);
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };

    case RESET_GAME:
      return {
        ...state,
        winner: '$',
        latestWinner: '',
        turn: 'O',
        tabledata: [
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
        ],
        recentcell: [-1, -1],
      };
    default:
      return state;
  }
};

export default T3_useReducer;
