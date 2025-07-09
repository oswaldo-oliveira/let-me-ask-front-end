import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = {
  rooms: { id: string; name: string }[]
}

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Carregando...</p>}
      <div className="flex flex-col">
        {data?.rooms?.map((room) => {
          return (
            <Link key={room.id} to={`/rooms/${room.id}`}>
              {room.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
