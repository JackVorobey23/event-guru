// type PaginationElement = {
//   content: string;
//   onClick: (i: number) => void;
// };

// export function generatePagination(
//   currentPage: number,
//   totalPages: number,
//   handlePageChange: (i: number) => void
// ): PaginationElement[] {
//   const result: PaginationElement[] = [];

//   if (currentPage > 1) {
//     result.push({
//       content: '<',
//       onClick: () => handlePageChange(currentPage - 1),
//     });
//   }

//   if (currentPage > 3) {
//     result.push({
//       content: '1',
//       onClick: () => handlePageChange(1),
//     });
//     result.push({
//       content: '...',
//       onClick: () => {},
//     });
//   }

//   const start = Math.max(currentPage - 1, 2);
//   const end = Math.min(currentPage + 1, totalPages - 1);

//   for (let i = start; i <= end; i++) {
//     result.push({
//       content: i.toString(),
//       onClick: () => handlePageChange(i),
//     });
//   }

//   if (currentPage < totalPages - 2) {
//     result.push({
//       content: '...',
//       onClick: () => {},
//     });
//   }

//   if (currentPage < totalPages - 1) {
//     result.push({
//       content: totalPages.toString(),
//       onClick: () => handlePageChange(totalPages),
//     });
//   }

//   if (currentPage < totalPages) {
//     result.push({
//       content: '>',
//       onClick: () => handlePageChange(currentPage + 1),
//     });
//   }

//   return result;
// }
