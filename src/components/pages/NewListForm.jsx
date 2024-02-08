import React from 'react';

export default function NewListForm({ questions }) {
  return (
    <>
      {questions.map((question) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </>
  );
}
