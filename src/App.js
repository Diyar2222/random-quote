import React, {useState,useEffect} from "react"

export default function App() {
  const [quote, setQuote] = useState([])
  function getQuote(){
    fetch('https://quotable.io/quotes?page=1')
    .then((response) => {return response.json()})
    .then((data) => {
      const randomNumber = Math.floor(Math.random()*data.results.length)
      setQuote(data.results[randomNumber])})
  }
  useEffect(() => {
    getQuote()
  },[])
  useEffect(() =>{
    let body = document.querySelector('body')
    let btn = document.querySelector('#new-quote')
    let twitter = document.querySelector('#tweet-quote')
    let first = Math.floor(Math.random()*255)
    let second = Math.floor(Math.random()*255)
    let third = Math.floor(Math.random()*255)
    let color = `rgb(${first},${second},${third})`
    body.style.backgroundColor = color
    body.style.color = color
    btn.style.backgroundColor = color
    twitter.style.backgroundColor = color
  },[quote])

  return (
      <div id="quote-box">
        <h2 id="text"><i class="quotes-sign fa-solid fa-quote-left"></i>{quote.content}</h2>
        <h3 id="author">- {quote.author}</h3>
        <div className="btn-container">
        <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'><i class="fa-brands fa-twitter"></i></a>
        <button onClick={getQuote} id="new-quote">New quote</button>
        </div>
      </div>
  );
}


