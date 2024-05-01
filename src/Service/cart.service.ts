import { ProductCart } from "../Model/product.model";

export class CartService {
  cartList: ProductCart[] = [
    new ProductCart(1, "xx99-mark-two-headphones", "XX99 MARK II", 2999),
    new ProductCart(2, "xx59-headphones", "XX59", 899),
    new ProductCart(1, "yx1-earphones", "YX1", 599),
  ];

  cartTotal: number[] = [0];
  cartShipping: number = 50;
  cartVAT: number[] = [0];

  AddProduct(product: ProductCart) {
    const findProduct = this.cartList.find((prod) => prod.slug === product.slug);

    if (findProduct) {
      findProduct.quantity += product.quantity;
    } else {
      this.cartList.push(product);
    }
    this.Total();
  }

  IncreaseProduct(index: number) {
    if (index !== -1) {
      this.cartList[index].quantity++;
    }
    this.Total();
  }

  ReduceProduct(index: number) {
    if (index !== -1) {
      if (this.cartList[index].quantity > 0) {
        this.cartList[index].quantity--;
      }
      if (this.cartList[index].quantity === 0) {
        this.cartList.splice(index, 1);
      }
    }
    this.Total();
  }

  RemoveAll() {
    this.cartList.splice(0, this.cartList.length);
    this.cartTotal.splice(0, 1);
    this.cartTotal.push(0);
    this.cartVAT.splice(0, 1);
    this.cartVAT.push(0);
  }

  Total() {
    const total = this.cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
    this.cartTotal.splice(0, 1);
    this.cartTotal.push(total);

    this.cartVAT.splice(0, 1);
    this.cartVAT.push(Math.round(total * 0.2));
  }
}