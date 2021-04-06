import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Pagination controls
 * 
 * @param {*} param0 
 */
export default function Controller({ page, setPage, numPages, numDisplayPages }) {

  const startPage = Math.max(0, Math.min(page - 1, numPages - numDisplayPages));

  return (
    <div className="flex items-center text-xl">
      <div
        className="flex justify-center items-center cursor-pointer mx-1 rounded-full w-3 h-3 p-4 hover:bg-yellow-300 transition-colors"
        onClick={() => setPage(0)}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </div>
      <div
        className="flex justify-center items-center cursor-pointer mx-1 rounded-full w-3 h-3 p-4 hover:bg-yellow-300 transition-colors"
        onClick={() => setPage(Math.max(page - 1, 0))}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      {new Array(numDisplayPages)
        .fill(undefined)
        .map((_, i) => (
          <div className="mx-1" key={`pagination-item-${startPage + i}`}>
            {
              startPage + i === page
                ? <div
                  className="flex justify-center items-center cursor-pointer w-3 h-3 p-4 select-none rounded-full bg-yellow-500 transition-colors"
                  onClick={() => setPage(startPage + i)}
                >{startPage + i + 1}</div>
                : <div
                  className="flex justify-center items-center cursor-pointer w-3 h-3 p-4 select-none rounded-full hover:bg-yellow-300 transition-colors"
                  onClick={() => setPage(startPage + i)}
                >{startPage + i + 1}</div>
            }
          </div>
        ))}
      <div
        className="flex justify-center items-center cursor-pointer mx-1 rounded-full w-3 h-3 p-4 hover:bg-yellow-300 transition-colors"
        onClick={() => setPage(Math.min(page + 1, numPages - 1))}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div
        className="flex justify-center items-center cursor-pointer mx-1 rounded-full w-3 h-3 p-4 hover:bg-yellow-300 transition-colors"
        onClick={() => setPage(numPages - 1)}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </div>
    </div>
  );
}