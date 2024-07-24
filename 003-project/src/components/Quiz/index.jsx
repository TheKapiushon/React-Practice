import { useRef, useState } from 'react';
import './index.css'

function Quiz() {

    const DATA = [
        {
            "Question": "What is React?",
            "Answer_1": "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.",
            "Answer_2": "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. ",
            "Answer_3": "is a programming language and core technology of the Web, alongside HTML and CSS. ",
            "Answer_4": "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
            "Right": 1
        },
        {
            "Question": "What is Next.JS",
            "Answer_1": "a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
            "Answer_2": "an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
            "Answer_3": "TypeScript-based free and open-source single-page web application framework.",
            "Answer_4": "an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
            "Right": 2
        },
        {
            "Question": "What is the definition of the following sentence? a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
            "Answer_1": "JavaScript",
            "Answer_2": "Node.JS",
            "Answer_3": "Angular",
            "Answer_4": "TypeScript",
            "Right": 4
        },
        {
            "Question": "When was the Angular release date?",
            "Answer_1": "5 November 2012",
            "Answer_2": "14 September 2016",
            "Answer_3": "25 July 1998",
            "Answer_4": "3 October 2014",
            "Right": 2
        },
        {
            "Question": "Which company Made the Vue?",
            "Answer_1": "Google",
            "Answer_2": "Microsoft",
            "Answer_3": "Facebook",
            "Answer_4": "Apple",
            "Right": 3
        },
    ]

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(DATA[index]);
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let Answer_1 = useRef()
    let Answer_2 = useRef()
    let Answer_3 = useRef()
    let Answer_4 = useRef()

    let answers_arr = [Answer_1, Answer_2, Answer_3, Answer_4]

    const checkAns = (e, right) => {
        if (lock === false) {
            if (question.Right === right) {
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add("false")
                setLock(true)
                answers_arr[question.Right - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {

        if (index === DATA.length - 1) {
            setResult(true)
            return 0;
        }

        setIndex(++index);
        setQuestion(DATA[index])
        setLock(false);
        answers_arr.map((answer) => {
            answer.current.classList.remove("false")
            answer.current.classList.remove("correct")
        })
    }

    return (
        <>
            <div className="box--container">
                <h1>Front-End Quiz Box</h1>
                {result ? <></> : <><div className="q--container">
                    <h2>{index + 1}. {question.Question}</h2>
                    <ul className="list--container">
                        <li ref={Answer_1} onClick={(e) => { checkAns(e, 1) }} className='list--item'>{question.Answer_1}</li>
                        <li ref={Answer_2} onClick={(e) => { checkAns(e, 2) }} className='list--item'>{question.Answer_2}</li>
                        <li ref={Answer_3} onClick={(e) => { checkAns(e, 3) }} className='list--item'>{question.Answer_3}</li>
                        <li ref={Answer_4} onClick={(e) => { checkAns(e, 4) }} className='list--item'>{question.Answer_4}</li>
                    </ul>
                </div>
                    <button onClick={next}>Next</button>
                    <div className="index--container">{index + 1} of {DATA.length} question</div></>}
                    {result? <><h2>You scored {score} out of {DATA.length}</h2></> : <></>}
            </div >
        </>
    )

}

export default Quiz;