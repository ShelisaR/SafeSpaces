export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
    isAdmin: boolean;
    roles: Roles;
}
export interface Roles {
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
}

