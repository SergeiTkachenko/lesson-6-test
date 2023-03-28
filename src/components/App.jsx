import { useSelector, useDispatch } from 'react-redux';
import { updateInc, updateDic } from 'redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.clicks.value);
  return (
    <div>
      <button type="button" onClick={() => dispatch(updateInc())}>
        +1
      </button>
      <p>Number if clicks:{numberOfClicks}</p>
      <button type="button" onClick={() => dispatch(updateDic(5))}>
        -5
      </button>
      <button type="button" onClick={() => dispatch(updateDic(10))}>
        -10
      </button>
    </div>
  );
};
