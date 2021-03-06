declare module DB {
  namespace checkout {
    type code = {
      code_id:number
      code:string
      one_time_use:0|1
      type:string
      value:number
      claimed:0|1
    }
    type product = {
      product_id:number
      price:number
      product_type:string
      label:string
      description:string
    }
  }

  namespace coursework {
    type entry = {
      coursework_id:number
      status:string
      sub:string
      lesson_id:number
      updated_on:string
    }
    type feedback = {
      feeback_id:number
      coursework_id:number
      user_media_id:number
      title:string
      message:string
      external_references:string
    }
    type media = {
      media_id:number
      coursework_id:number
      sub:string
      order:number
      s3_key:string
      category:string
      created_on:string
    }
  }
  type languages = {
    lang:string
    label:string
  }
  type lessons = {
    lesson_id:number
    book_id:number
    lesson_label:string
    lesson_description:string
    lesson_language:string
  }
}
