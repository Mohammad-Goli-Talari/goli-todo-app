/* eslint-disable react/prop-types */
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function TodoList({ tasks, onRemoveTask }) {
  return (
    <div id="list">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="round">
              <input id={"checkbtn" + index} type="checkbox" name="DoTask" />
              <label htmlFor={"checkbtn" + index}></label>
              {task}
              <button className="removebtn" onClick={() => onRemoveTask(index)}>
                <DeleteForeverIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
