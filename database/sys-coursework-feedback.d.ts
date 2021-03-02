declare namespace DB {
  type coursework_feedback = {
    feedback_id?:number
    coursework_id?:number
    user_media_id?:number
    feedback_order?:number
    title?:string
    message?:string
    external_references?:string | Array<string>
  }
}
