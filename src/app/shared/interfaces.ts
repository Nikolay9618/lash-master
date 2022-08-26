export interface User {
   email: string
   password: string
   returnSecureToken?: boolean
}

export interface FbAuthResponce {
   idToken: string
   expiresIn: string
}

export interface Info {
   id?: string,
   tel: string,
   name: string,
   wish?: string,
   date: Date
}

export interface FbCreateResponse {
   name: string
}

export interface Price {
   oneD: string,
   twoD: string,
   threeD: string,
   fourD: string
}