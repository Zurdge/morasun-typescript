declare namespace DB {
  type coursework_media = {
    media_id?:number
    coursework_id?:number
    sub?:string
    order?:number
    s3_key?:string
    lesson_id?:number
    category?:"coursework"
    created_on?:string
  }
  type user_media_extra_props = {
    should_upload?:boolean
    url?:string
    uri?:string
    base64?:string
  }
}
