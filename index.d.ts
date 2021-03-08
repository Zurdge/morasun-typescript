declare module DB {
  type book = {
    book_id:number
    book_initials:string
    book_label:string
    book_description:string
    book_language:string
  }
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
    grammar_count:number
    vocab_count:number
  }
  namespace msg {
    type message = {
      message_id:number
      thread_id:number
      message:string
      owner:string
      created_on:string
      removed:"y"|"n"
    }
    type thread = {
      thread_id:number
      created_on:string
      owner:string
      book_id:number
      lesson_id:number
      status:'none' | 'pending-teacher-responce' | 'pending-student-responce'
    }
  }

  type order = {
    order_id:number
    category:"unknown"
    created_on:string
    sub:string
    payment_amount:number
    payment_method:"card"
    lesson_id:number
    book_id:number
    timeslot:string
  }

  type teacher = {
    teacher_id:number
    account_level:'teacher' | 'admin',
    sub:string
    lastupdate:string
    contact_name:string
    firstname:string
    lastname:string
    email:string
    telephone:string
    address_1:string
    address_2:string
    address_3:string
    address_4:string
    skype_id:string
    google_meet_id:string
    line_id:string
    zoom_id:string
  }

  type teachers_schedule = {
    block_id:number
    sub:string
    day:number
    hour:number
  }

  type user = {
    user_id:number
    sub:string
    contact_name:string
    firstname:string
    lastname:string
    email:string
    lastupdate:string
    telephone:string
    preferred_method_of_contact:string
    users_method_of_contact_id:string
    current_language:"JP",
    current_book:number
    push_token:string
    push_consent_message:0|1
    push_consent_promo:0|1
    push_concent_system:0|1
    stripe_customer_id:string
  }
}
