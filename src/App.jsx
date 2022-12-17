import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);
  const [] = useState([]);
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
              // mapなどを使用してrenaderingする場合は、"key"をつけること
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
          <div className="list-row">
            <li>ううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>えええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
