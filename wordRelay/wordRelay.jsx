import React, { useRef, useState } from 'react';

const WordRealy = () => {

  const [word, setWord] = useState('시작');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length -1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
    } else {
      setResult('땡');
    }
    setValue('');
    inputEl.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input id="wordInput" className="wordInput" ref={inputEl} value={value} onChange={onChangeInput} />
        <button>Go!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRealy;