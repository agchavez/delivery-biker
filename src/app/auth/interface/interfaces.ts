export interface LoginResponse{
    ok      : boolean;
    verified? : boolean;
    msj     : string;
    biker? : Biker;
    token?  : string;

  }

  export interface Biker {
    _id: string;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    identity: string;
    imgUrl?: string;

  }

  export interface RegisterBiker {
    msj: string,
    id: string,
    biker: Biker,
  }
