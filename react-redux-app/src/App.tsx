import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { addToDoBy } from './reducers/toDos';
interface IProps {
  value: any;
  onIncrease: () => void;
  onDecrease: () => void;
}
function App({ value, onIncrease, onDecrease }: IProps) {
  const counter = useSelector((state: RootState) => state.counter);
  const toDos: string[] = useSelector((state: RootState) => state.toDos);
  const dispatch = useDispatch();
  const [toDoValue, setToDoValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoValue(e.target.value);
  };
  const updateToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToDoBy(toDoValue)); // dispatch가 reducer에게 action을 전달해주는 역할.
    setToDoValue('');
  };
  return (
    <div className="App">
      <div>
        Clicked : {counter} times
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>

      <form onSubmit={updateToDo}>
        <input type="text" value={toDoValue} onChange={handleChange} />
        <button type="submit">제출</button>
      </form>
      <ul>{toDos?.map((toDo, index) => <li key={index}>{toDo}</li>)}</ul>
    </div>
  );
}

export default App;
