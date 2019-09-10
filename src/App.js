import React, { useEffect } from "react";
import gql from "graphql-tag";
import { MockedProvider } from "@apollo/react-testing";
import { useQuery } from "@apollo/react-hooks";

const GET_DOG = gql`
  query getGod {
    dog {
      name
    }
  }
`;

function Dog() {
  const { data, loading, error, startPolling, stopPolling } = useQuery(GET_DOG);

  // Source of the problem
  useEffect(() => {
    startPolling(20000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error!</p>;
  }

  return <p>{JSON.stringify(data)}</p>;
}

const mocks = [
  {
    request: {
      query: GET_DOG,
    },
    result: { data: { dog: { name: "Doggy" } } },
  },
];

export function App() {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog />
    </MockedProvider>
  );
}
