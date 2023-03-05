import guaranteeList from "../../data/data";
import Guarantee from "./Guarantee";
import "../../style/Guarantee.css";

export default function GuaranteeList() {
  return (
    <div className="guarantee-list">
      {guaranteeList.map((item) => {
        const { id, title, img, description } = item;
        return (
          <Guarantee
            key={id}
            title={title}
            img={img}
            description={description}
          />
        );
      })}
    </div>
  );
}
