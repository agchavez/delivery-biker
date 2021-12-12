export interface OrderResponse {
  _id:          string;
  status:       string;
  user:         User;
  paid:         boolean;
  orderDetails: OrderDetail[];
  date:         Date;
  __v:          number;
}

export interface OrderDetail {
  product:     Product;
  quantity:    number;
  totalLine:   number;
  _id:         string;
  complements: any[];
}

export interface Product {
  _id:     string;
  name:    string;
  company: Company;
}

export interface Company {
  _id:       string;
  phone:     string;
  name:      string;
  imgUrl:    string;
  bannerUrl: string;
  location:  Location;
  __v:       number;
}

export interface Location {
  lat:         string;
  long:        string;
  description: string;
}

export interface User {
  _id:       string;
  firstName: string;
  lastName:  string;
}

export interface OrderByIDResponse {
  order:     OrderResponse;
  direction: Direction;
}

export interface Direction {
  _id:     string;
  depto:   string;
  muni:    string;
  lat:     number;
  long:    number;
  idBuyer: string;
}


export interface PutStatusOrder {
  ok:    boolean;
  order: null;
}
