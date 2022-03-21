import Layout from "../layout";
import React from "react";
import panelQuestion from "../../src/data/questionAndAnswer";

const InputCard = () => {
  const [face, setFace] = React.useState(true);

  const [isAnswer, setIsAnswer] = React.useState("");

  function controlInputText() {
    if (isAnswer === panelQuestion.questionTwo.answer) {
      return (
        <div>
          Right ! The good answer is : {panelQuestion.questionTwo.answer}
        </div>
      );
    } else if (isAnswer === "") {
      return `Wrong ! The good answer is => ${panelQuestion.questionTwo.answer}`;
    } else {
      return `Wrong ! The good answer is => ${panelQuestion.questionTwo.answer}`;
    }
  }

  return (
    <div>
      <Layout>
        <br />
        {face ? (
          <div>
            <label htmlFor="firstNameString">
              {panelQuestion.questionTwo.question}
            </label>
            <form onSubmit={controlInputText}>
              <input
                type="text"
                className="form-control"
                placeholder="Capital letter expected"
                onChange={(event) => setIsAnswer(event.target.value)}
              />
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

export default InputCard;
