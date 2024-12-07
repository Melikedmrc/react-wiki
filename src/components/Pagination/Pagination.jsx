import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // Sayfa değişimi işlemi
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1); // Sayfa numarasını güncelleme
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth); // Ekran boyutlarını güncelleme
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
         .prev a,
          .next a {
            text-decoration: none; /* 'a' etiketindeki alt çizgiyi kaldır */
          }

          .prev:hover a,
          .next:hover a {
            color: white; /* Hover durumunda yazı rengi beyaz olacak */
          }
          .pagination .page-item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-3 gap-2"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-outline-primary fs-5 prev" // Bootstrap button sınıfı
        nextClassName="btn btn-outline-primary fs-5 next" // Bootstrap button sınıfı
        activeClassName="active" // Aktif sayfa için Bootstrap sınıfı
        marginPagesDisplayed={width < 576 ? 1 : 2} // Küçük ekranlarda margin
        pageRangeDisplayed={width < 576 ? 1 : 2} // Küçük ekranlarda sayfa aralığı
        pageCount={info?.pages} // Toplam sayfa sayısı
        onPageChange={pageChange} // Sayfa değişimi
        pageClassName="page-item" // Bootstrap sayfa item sınıfı
        pageLinkClassName="page-link" // Bootstrap page link sınıfı
      />
    </>
  );
};

export default Pagination;
