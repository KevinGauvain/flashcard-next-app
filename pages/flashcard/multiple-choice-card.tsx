import Layout from "../layout";
import panelQuestion from "../../src/data/questionAndAnswer";

import React from "react";

const MultipleChoice = () => {
  const [face, setFace] = React.useState(true);

  const [isAnswer, setIsAnswer] = React.useState("");

  function controlInputText() {
    if (isAnswer === panelQuestion.questionThree.answer) {
      return `Right ! The good answer is : ${panelQuestion.questionThree.answer}`;
    } else if (isAnswer === "") {
      return `Wrong ! The good answer is => ${panelQuestion.questionThree.answer}`;
    } else {
      return `Wrong ! The good answer is => ${panelQuestion.questionThree.answer}`;
    }
  }

  return (
    <div>
      <Layout>
        <br />
        {face ? (
          <div>
            <form>
              <label htmlFor="firstNameString">
                {panelQuestion.questionThree.question}
              </label>
              <div>
                <input
                  type="radio"
                  id="choice1"
                  name="capital"
                  value="Paris"
                  onChange={(event) => setIsAnswer("Paris")}
                />
                <label htmlFor="choice1">Paris</label>
                <br />
                <input
                  type="radio"
                  id="choice2"
                  name="capital"
                  value="Berlin"
                  onChange={(event) => setIsAnswer("Berlin")}
                />
                <label htmlFor="choice2">Berlin</label>
                <br />
                <input
                  type="radio"
                  id="choice3"
                  name="capital"
                  value="Londes"
                  onChange={(event) => setIsAnswer("Londres")}
                />
                <label htmlFor="choice3">Londres</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => setFace(!face)}
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <button onClick={() => setFace(!face)}>{controlInputText()}</button>
        )}
      </Layout>
    </div>
  );
};

export default MultipleChoice;
