export declare namespace DB {
  export namespace checkout {
    type code = {
      code_id:number
      code:string
      one_time_use:0|1
      type:string
      value:number
      claimed:0|1
    }
  }
}
