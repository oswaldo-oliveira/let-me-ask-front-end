export type GetRoomQuestionsResponse = {
  questions: {
    id: string
    question: string
    answer: string | null
    createdAt: string
  }[]
}
