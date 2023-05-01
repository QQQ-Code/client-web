import AllProductsUI from './AllProducts.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { FETCH_ALL_PRODUCTS } from './AllProducts.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function AllProducts() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchAllProducts'>>(FETCH_ALL_PRODUCTS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const allProducts = data?.fetchAllProducts ?? []

  const categoryTitle = '💻 전체 장비 모아보기'

  return (
    <>
      <AllProductsUI categoryTitle={categoryTitle} allProducts={allProducts} />
    </>
  )
}
