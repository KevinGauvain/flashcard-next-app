import Layout from "../layout";
import React from "react";
import panelQuestion from "../../src/data/questionAndAnswer";

const SimpleCard = () => {
  const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(true);

  return (
    <div>
      <Layout>
        <br />
        {/* <p>{showingOneFaceOfCard}</p> */}
        <button onClick={() => setShowingOneFaceOfCard(!showingOneFaceOfCard)}>
          {showingOneFaceOfCard ? (
            <p>{panelQuestion.questionOne.question}</p>
          ) : (
            <p>{panelQuestion.questionOne.answer}</p>
          )}
          {/* <p>{props.question}</p> */}
        </button>
      </Layout>
    </div>
  );
};

export default SimpleCard;
