import { useEffect, useState } from "react";

const JokeItem = ({ joke }) => {
  return (
    <div className="my-6 rounded-lg bg-green-50 p-4 shadow-md">
      <h2 className="text-xl font-bold">{joke.value} </h2>
    </div>
  );
};

export const Joke = () => {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        setJoke(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJoke();
  }, []);

  if (loading) {
    return <h2 className="mt-5 text-center text-2xl font-bold"> Loading...</h2>;
  }

  return <JokeItem joke={joke} />;
};
