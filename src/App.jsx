import React from "react";
// ここ注意！追加するときは、自身で追加することがよさそう。
import { useState } from "react";
import "./styles.css";

export const App = () => {
  // 追加の際の入力値
  const [todoText, setTodoText] = useState('')
  // 未完了時の処理
  const [incompleteTodos, setIncompleteTodos] = useState(["ああああ", "いいいい"]);
  // 完了時の処理
  const [conpleteTodos, setConpleteTodos] = useState(["ううう", "えええ"]);
  return (
    // 空のタグで囲ってあげる必要がある。（divでも良いが、必要ないタグになってしまうため）
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // 差分比較のために目印をつける=key
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {conpleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
