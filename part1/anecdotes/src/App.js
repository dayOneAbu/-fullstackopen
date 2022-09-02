import { useState } from "react";

function App() {
  const data = [
    { anecdote: "If it hurts, do it more often.", votes: 0 },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { anecdote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(data);
  const [largestVote, setLargestVote] = useState({
    anecdotes: "",
    votes: 0,
  });
  const handleVote = () => {
    setAnecdotes((prev) => {
      const copy = [...prev];
      copy[selected].votes = copy[selected].votes + 1;
      return copy;
    });
  };
  const handelLargestVote = () => {
    const biggestVote = 0;
    anecdotes.map((item) => {
      setLargestVote((prev) => {
        let copy = { ...prev };
        if (item.votes > biggestVote && item.votes > copy.votes) {
          copy = item;
        }
        return copy;
      });
    });
  };
  return (
    <>
      <div>
        <h1>Anecdotes of the day</h1>
        <p>{anecdotes[selected]?.anecdote}</p>
        <p>has {anecdotes[selected]?.votes} votes</p>
        <button
          onClick={() => {
            handleVote();
            handelLargestVote();
          }}
        >
          vote
        </button>
        <button
          onClick={() => {
            setSelected((prev) => {
              return prev === anecdotes.length - 1 ? 0 : prev + 1;
            });
          }}
        >
          next anecdotes
        </button>
      </div>
      <div>
        <h1>Anecdotes with most vote</h1>
        <p>{largestVote?.anecdote}</p>
        <p>has {largestVote?.votes} votes</p>
      </div>
    </>
  );
}

export default App;
