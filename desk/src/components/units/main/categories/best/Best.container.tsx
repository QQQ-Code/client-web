import BestUI from './Best.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BEST_BOARDS } from './Best.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function Best() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchBestBoards'>>(FETCH_BEST_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const bestBoards = data?.fetchBestBoards ?? []

  const categoryTitle = '🏆 인기 게시물 TOP 10 🏆'
  const titles = bestBoards.map((board: TBoard) => board.title)
  const writers = bestBoards.map((board: TBoard) => board.writer.nickName)
  const images = bestBoards.map(
    (board: TBoard) => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )

  return (
    <>
      <BestUI
        categoryTitle={categoryTitle}
        images={images}
        titles={titles}
        writers={writers}
      />
    </>
  )
}
