export interface Page<T> {

    content: T[],
    pageable: {
      pageNumber: number,
      pageSize: number,
      offset: number,
      unpaged: boolean,
      paged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    first: boolean,
    size: number,
    number: number,
    empty: boolean

}
