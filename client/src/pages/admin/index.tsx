import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import ProductsList from '../../components/products/list';
import GET_PRODUCTS, { TypeProducts } from '../../graphql/products';
import useIntersection from '../../hooks/useIntersection';
import { graphqlFetcher, QueryKeys } from '../../queryClient';

const adminIndex = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);

  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TypeProducts>(
      [QueryKeys.PRODUCTS, true],
      ({ pageParam = '' }) => graphqlFetcher(GET_PRODUCTS, { cursor: pageParam, showDeleted: true }),
      {
        getNextPageParam: lastPage => {
          return lastPage.products.at(-1)?.id;
        },
      },
    )

  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  }, [intersecting]);

  return (
    <div>
      <h2>관리자 페이지</h2>
      <ProductsList list={data?.pages || []} />
      <div ref={fetchMoreRef} />
    </div>
  );
}

export default adminIndex;