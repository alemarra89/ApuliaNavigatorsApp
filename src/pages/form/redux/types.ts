
// definiamo il tipo del reducer del form

export interface FormReducerType {
    username: string
    usernameDirty: boolean
    usernameError: string
    password: string
    passwordDirty: boolean
    passwordError: string
    posts: Post[]
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}