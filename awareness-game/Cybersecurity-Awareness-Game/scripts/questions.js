// Questions for the Cybersecurity Awareness Game

const questions = [
  {
    question: "Which of the following is a strong password?",
    answers: [
      { text: "123456", correct: false },
      { text: "Password123", correct: false },
      { text: "P@ssw0rd!2025", correct: true },
    ],
  },
  {
    question: "What should you do if you receive an email asking for your password?",
    answers: [
      { text: "Reply with your password", correct: false },
      { text: "Ignore the email or report it", correct: true },
      { text: "Click the link in the email", correct: false },
    ],
  },
  {
    question: "What is phishing?",
    answers: [
      { text: "A scam to steal personal information", correct: true },
      { text: "A type of computer virus", correct: false },
      { text: "A secure way to communicate", correct: false },
    ],
  },
  {
    question: "How often should you update your passwords?",
    answers: [
      { text: "Every year", correct: false },
      { text: "Every 6 months or whenever compromised", correct: true },
      { text: "Never", correct: false },
    ],
  },
];