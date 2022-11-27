import { Injectable } from "@nestjs/common"
import axios from "axios"

@Injectable()
export class AxiosBuild {
  public request ( url: string ) {
    return axios.create( {baseURL: url,
      headers: {
        "Content-Type":"application/json",
      },
      responseType: 'json',
  } )
  }
}
