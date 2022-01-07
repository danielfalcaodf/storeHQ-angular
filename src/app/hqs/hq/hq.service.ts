import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HQ } from './hq';
import { MD5 } from 'crypto-js'

const API = 'https://gateway.marvel.com:443/v1/public/';
const KEY = '';
const TS = new Date().getTime();
const HASH = MD5(TS + privateKEY + publicKEY).toString();
const AUTH = `ts=${TS}&apikey=${KEY}&hash=${HASH}`;

@Injectable({ providedIn: 'root' })


export class HqService {
    constructor(private http: HttpClient) { }
    listHQs() {
        return this.http
            .get<HQ[]>(API + 'comics' + "?" + KEY);
    }

}





