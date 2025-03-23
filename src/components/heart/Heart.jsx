import { useDispatch, useSelector } from "react-redux";


export default function Heart() {
    const favoriteItems = useSelector((state) => state.flower.favoriteItems || []);
    const dispatch = useDispatch();
  
    if (favoriteItems.length === 0) {
      return <p className="cartt">Избранное пусто</p>;
    }
  
    return (
      <div className="cart-container">
        {favoriteItems.map((product) => (
          <div className="card container" key={product.id}>
            <div className="basket">
              <div className="card-product">
                <div className="card-block">
                  <img src={product.imageUrl} className="cardImg" alt={product.title} />
                  <h6>{product.title}</h6>
                </div>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

}
