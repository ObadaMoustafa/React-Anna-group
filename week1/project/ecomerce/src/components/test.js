import categories from "./fake-data/all-categories";

export default function Categories () {
    return (
        <div>
            {categories.map((category, index) => {
                return(
                    <div key = {index}>
                        <button>{category}</button>
                    </div>
                )
            })}
        </div>
    )
}

// export default function Products() {
//     return (
//       <div>
//            {products.map((product, id) => {
//       return(
//         <div key = {id}>
//           <div className = "productDescription">
//             <a href = ""><img src={product.image}></img></a>
//             <a href=""><p className="description">{product.title}</p></a>
//         </div>
//         </div>
//       )}
//       )}
//       </div>
//     )
//   }