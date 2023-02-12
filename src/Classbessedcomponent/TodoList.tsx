import { FC, memo } from "react";

type Todolistprops = {
  todo: string;
  onselect: any;
  id: number;
};

const TodoList: FC<Todolistprops> = (props) => {
  return (
    <div>
      <button onClick={() => props.onselect(props.id)} className="bg-red-500">
        remove
      </button>

      <h1>{props.todo}</h1>
    </div>
  );
};
TodoList.defaultProps = {};
export default memo(TodoList);
