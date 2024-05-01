interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}
interface Includes {
  quantity: number;
  item: string;
}
interface Others {
  slug: string;
  name: string;
  image: Image;
}
interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}
export class Product {
  public id: number;
  public slug: string;
  public name: string;
  public image: Image;
  public category: string;
  public categoryImage: Image;
  public newProduct: boolean;
  public price: number;
  public description: string;
  public features: string;
  public includes: Includes[];
  public gallery: Gallery;
  public others: Others[];

  constructor(prod: Product) {
    this.id = prod.id;
    this.slug = prod.slug;
    this.name = prod.name;
    this.image = prod.image;
    this.category = prod.category;
    this.categoryImage = prod.categoryImage;
    this.newProduct = prod.newProduct;
    this.price = prod.price;
    this.description = prod.description;
    this.features = prod.features;
    this.includes = prod.includes;
    this.gallery = prod.gallery;
    this.others = prod.others;
  }
};

export class ProductCart {
  quantity: number;
  slug: string;
  name: string;
  price: number;

  constructor(quantity: number, slug: string, name: string, price: number) {
    this.quantity = quantity;
    this.slug = slug;
    this.name = name;
    this.price = price;
  }
}