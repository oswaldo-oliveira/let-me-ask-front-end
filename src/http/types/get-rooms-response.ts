export type GetRoomsResponse = {
  rooms: {
    id: string
    name: string
    createdAt: string
    questionsCount: number
    isGeneratingAnswer?: boolean
  }[]
}
