import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable()
export class UserRequestService {
 
  username:string;
 private repo:string;
  constructor(private http:HttpClient) {
    
   }
   
  
   reposLink(reposearch){

    
        return this.http.get<JSON[]>(`https://api.github.com/repos/`+reposearch)
            
          
          
            
          }
        
      
    
  



  userInfo(inputsearch){

      return  this.http.get<JSON[]>(`https://api.github.com/users/`+inputsearch)
    
  }
    }