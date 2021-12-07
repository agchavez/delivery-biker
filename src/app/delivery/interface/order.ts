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
  complements: Complement[];
}

export interface Complement {
  name:      string;
  quantity:  number;
  totalLine: number;
  _id:       string;
}

export interface Product {
  _id:     string;
  name:    string;
  company: Company;
}

export interface Company {
  _id:    string;
  name:   string;
  imgUrl: string;
}

export interface User {
  _id:       string;
  firstName: string;
  lastName:  string;
}
