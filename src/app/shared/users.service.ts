import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class UsersService {
    constructor(private http: HttpClient){}

    getUsers(page: number, gender: string, nationality: string, seed: string){
        let queryString = `?page=${page}&results=20`

        if(gender)
            queryString += `&gender=${gender}`
        if(nationality)
            queryString += `&nationality=${nationality}`
        if(seed)
            queryString += `&seed=${seed}`

        return this.http.get(`https://randomuser.me/api/${queryString}&exc=login,cell,id`)
    }
}