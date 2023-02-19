import './style.css'

const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const question = document.getElementById('question')
const answer = document.getElementById('answer-btn')
const target = document.getElementById('target')
const status = document.getElementById('status')
const welcome = document.getElementById('wel')
const submit = document.getElementById('submit')
const main = document.getElementById('conatiner')
const last = document.getElementById('completed')

let currentQueIndex: number


startBtn?.addEventListener('click', startGame)
nextBtn?.addEventListener('click', () => {
  currentQueIndex++
  setNextQue()
})
prevBtn?.addEventListener('click', () => {
  currentQueIndex--
  setPrevQue()
})

function startGame() {
  console.log('Game started!!')
  startBtn?.classList.add('hide')
  target?.classList.remove('hide')
  status?.classList.remove('hide')
  welcome?.classList.add('hide')
  questionContainer?.classList.remove('hide')
  prevBtn?.classList.remove('hide')
  nextBtn?.classList.remove('hide')
  currentQueIndex = 0
  setNextQue()
}

function setNextQue() {
  resetState()
  render(questions[currentQueIndex])
}

function setPrevQue() {
  resetState()
  render(questions[currentQueIndex])
}

function render(Que: { question: string; answer: any, Id: any}) {


    question.innerText = Que.question?.toString()

  if(currentQueIndex != 4){
    Que.answer.map((ans: number) => {
      const button = document.createElement('button')
      button.innerText = ans.toString()
      button.classList.add('btn')
      button.addEventListener('click', (e: any) => {
        console.log(e.target.innerText)
        console.log(e)
        target.innerText = 'Selected answer: ' + e.target.innerText
      
        
        nextBtn?.addEventListener('click', () => {
          localStorage.setItem(Que.Id, e.target.innerText)
        })  
       
      
        if(questions.length > currentQueIndex + 1){
          nextBtn?.classList.remove('hide')
          prevBtn?.classList.remove('hide')
      
        }
      
      })
      answer?.appendChild(button)
    })
  }

    if(currentQueIndex == 4){
      const input = document.createElement('textarea')
      input.classList.add('input')
      input.id = 'textArea'
      answer?.appendChild(input)
      target?.classList.add('hide')
      submit?.classList.remove('hide')

      submit?.addEventListener('click', () => {
        if(input.value != '' || input.value != undefined){
          localStorage.setItem(Que.Id, input.value)
        }
      })

      submit?.addEventListener('click', () => {
        main?.classList.add('hide')
        last?.classList.remove('hide')
        status?.classList.add('hide')
      })
    }

    status.innerHTML = currentQueIndex + 1 + '/' + questions.length
  
}

function resetState() {
  nextBtn?.classList.add('hide')
  prevBtn?.classList.add('hide')
  while(answer?.firstChild){
    answer.removeChild(answer.firstChild)
  }
  target.innerHTML = 'Selected answer: ' + ''
}

const questions = [
  {
    Id: 'Ap10mkqq',
    question: '1. How satisfied are you with our products?',
    answer: [1,2,3,4,5]
  },
  {
    Id: 'Bwi134pv',
    question: '2. How fair are the prices compared to similar retailers?',
    answer: [1,2,3,4,5]
  },
  {
    Id: 'Cfm676pp',
    question: '3. How satisfied are you with the value for money of your purchase?',
    answer: [1,2,3,4,5]
  },
  {
    Id: 'Miw0100wo',
    question: '4. On a scale of 1-10 how would you recommend us to your friends and family?',
    answer: [1,2,3,4,5,6,7,8,9,10]
  },
  {
    Id: 'Dkkd55nfrk',
    question: '5. What could we do to improve our service?',
    answer: {type: String}
  },
]

