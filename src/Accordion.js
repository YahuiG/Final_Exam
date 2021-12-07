import Panel from "./Panel";
import { useState } from "react";
import books from "./Data";
import "./App.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rate, setRate] = useState();

  const bookList = books.map((books, index) => (
    <Panel
      key={index}
      src={books.coverImg}
      name={books.name}
      isActive={activeIndex === books.id}
      onShow={() => setActiveIndex(books.id)}
    >
      <p>Author: {books.author}</p>
      <div>
        <ul>
          {books.sequels.map((e, key) => {
            return (
              <li>
                <p>{e}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Rate: {books.rating}</p>
    </Panel>
  ));

  return (
    <div className="book">
      <h3>Select an Album</h3>
      {bookList};
    </div>
  );
}
