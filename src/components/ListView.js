import React, { useEffect, useState } from "react";
// import ItemCa from "./Item";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import { Button } from "react-bootstrap";

const ListView = ({name}) => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [page, setpage] = useState(1);
  const [totalItems, setTotalItems] = useState(0)
  const pageSize = 20;

/*   const url = `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${params.apple}&page=${page}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`;
  //in App.js route cant able to identify the required the items beacuse everything on the same component, and in webpage when we click on item we need to refresh the page manually
   */

  const url = `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${name}&page=${page}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`;

  useEffect(() => {
    fetch(url)
      .then((item) => item.json())
      .then((res) => {
      setItems(res.result.products)
      setTotalItems(res.result.count)
    });
  }, [url]);

  const prevPage = () => {
    fetch(
      `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${
        params.apple
      }&page=${page - 1}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`
    )
      .then((list) => list.json())
      .then((res) => setItems(res.result.products));

    setpage(page - 1);
  };

  const nextPage = () => {
    fetch(
      `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${
        params.apple
      }&page=${page - 1}&count=${pageSize}sort_by=&sort_dir=desc&filter=`
    )
      .then((list) => list.json())
      .then((res) => setItems(res.result.products));

    setpage(page + 1);
  };

  return (
    <div className="d-flex flex-wrap m-3">
      {items.map((item) => {
        return (
          <div>
            <ItemCard
              name={item.name}
              price={item.price}
              desc={item.description}
              img={item.image}
            />
          </div>
        );
      })}
      <div className="container d-flex justify-content-around">
        <Button variant="dark" disabled={page >= 1} onClick={prevPage}>
          Prev
        </Button>{" "}
        <Button variant="dark" disabled={page <= Math.floor(totalItems/PerformanceResourceTiming)} onClick={nextPage}>
          Next
        </Button>{" "}
      </div>
    </div>
  );
};

export default ListView;
