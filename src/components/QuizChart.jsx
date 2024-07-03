import React from 'react'
import QuizLesson from './QuizLesson'

const QuizChart = () => {
  const quizData = [
    {
      backgroundColor: 'bg-blue-500',
      backgroundImage: 'bg-curtain',
      lessonNumber: 1,
      lessonId: 1,
      lessonTitle: 'Introduction to ASL',
      lessonSlug: 'introduction-to-asl',
      title: 'Alphabet in ASL',
      slug: 'alphabet-in-asl',
      questions: [
        {
          id: 1,
          imageUrl:
            'https://lead-academy.org/blog/wp-content/uploads/2022/06/How-to-Sign-the-Alphabet-in-BSL.webp', // Replace with actual image URL
          description: 'The sign for "Hello"',
        },
        {
          id: 2,
          imageUrl: 'https://example.com/sign2.jpg', // Replace with actual image URL
          description: 'The sign for "Thank you"',
        },
      ],
      signs: [
        {
          image: '/path/to/sign-image1.jpg',
          word: 'Hello',
          meaning: 'A greeting or expression of goodwill.',
        },
        {
          image: '/path/to/sign-image2.jpg',
          word: 'Thank You',
          meaning: 'An expression of gratitude.',
        },
        {
          image: '/path/to/sign-image3.jpg',
          word: 'Please',
          meaning: 'A polite request.',
        },
        {
          image: '/path/to/sign-image4.jpg',
          word: 'Yes',
          meaning: 'An affirmative response.',
        },
        {
          image: '/path/to/sign-image5.jpg',
          word: 'No',
          meaning: 'A negative response.',
        },
      ],
    },
    {
      backgroundColor: 'bg-green-500',
      backgroundImage: 'bg-circles',
      lessonNumber: 2,
      lessonId: 2,
      lessonTitle: 'Basic Conversations',
      lessonSlug: 'basic-conversations',
      title: 'Word Meanings',
      slug: 'word-meanings',
      questions: [
        {
          id: 1,
          imageUrl:
            'https://lead-academy.org/blog/wp-content/uploads/2022/06/How-to-Sign-the-Alphabet-in-BSL.webp', // Replace with actual image URL
          description: 'The sign for "Hello"',
        },
        {
          id: 2,
          imageUrl: 'https://example.com/sign2.jpg', // Replace with actual image URL
          description: 'The sign for "Thank you"',
        },
      ],
      signs: [
        {
          image: '/path/to/sign-image6.jpg',
          word: 'Good Morning',
          meaning: 'A greeting used in the morning.',
        },
        {
          image: '/path/to/sign-image7.jpg',
          word: 'Good Night',
          meaning: 'A greeting used at night.',
        },
        {
          image: '/path/to/sign-image8.jpg',
          word: 'Sorry',
          meaning: 'An apology.',
        },
        {
          image: '/path/to/sign-image9.jpg',
          word: 'Excuse Me',
          meaning: "Used to get someone's attention.",
        },
        {
          image: '/path/to/sign-image10.jpg',
          word: 'Help',
          meaning: 'A request for assistance.',
        },
      ],
    },
  ]
  return (
    <section id="QuizChart">
      <h3 className="font-bold mb-4 text-xl">Asl Chart</h3>
      {/* Asl Lessons */}
      <div className="flex flex-col gap-4">
        {quizData.map((lesson) => (
          <QuizLesson key={lesson.slug} data={lesson} />
        ))}
      </div>
    </section>
  )
}

export default QuizChart