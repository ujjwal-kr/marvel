interface  Roles {
  user?: boolean;
  admin?: boolean;
}

export interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  roles?: Roles;
  characters?: string;
}
