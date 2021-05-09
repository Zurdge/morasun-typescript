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
  namespace knowledge_test {
    type feedback = {
      feedback_id:string
      page:number
      section:string
      message:string
      lesson_id:number
    }
    type option = {
      option_id:string
      question_id:string
      text:string
      lesson_id:number
    }
    type question = {
      question_id:string
      answer:string
      question_type:"word-match"|"gap-fill"|"audio-match",
      sentence?:string
      audio_file?:string

      lesson_id:number
      feedback_id:string
    }
    type statistics = {
      id:number
      sub:string
      lesson_id:number
      question_id:string
      was_correct:1|0
      answered:string
      created_on:string
    }
  }
  type languages = {
    lang:string
    label:string
  }
  type lesson = {
    lesson_id:number
    book_id:number
    lesson_label:string
    lesson_description:string
    lesson_language:string
    grammar_count:number
    vocab_count:number
    url_to_vocabulary:string
    url_to_grammar:string

    study_material_listening:string
    study_material_flashcards:string
    study_material_printing:string
    study_material_all:string

    order:number
  }
  namespace lessons {
    type booked = {
      booking_id:number
      lesson_id:number
      block_id:number
      year  :number
      week  :number
      day   :number
      hour  :number
      date  :string

      type          : "1-on-1" | "group"
      lesson_status : "not_started" | "completed" | "issue" | "cancelled"
      lesson_link   : string

      student_sub   : string
      teacher_sub  : string
      teachers_message : string
    }

    type group_schedule = {
      block_id:number

      label:string
      description:string

      day:number
      hour:number
      lesson_id:number
      class_size:number

      teacher_sub:string
    }

    type lesson_log = {
      id:number
      student_sub:string
      date:string
      lesson_id:number
      listening:number
      speaking:number
      reading:number
      lesson_chapter_complete:boolean
      teachers_comments:string
    }
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
      lesson_id:number
      status:'none' | 'pending-teacher-responce' | 'pending-teacher-marking' | 'pending-student-responce'
      coursework_status:'none' | 'marked' | 'requires-marking' | 'seen'
      last_updated:string
    }

    namespace coursework {
      type feedback = {
        id      : number
        thread_id: number
        type    : "section-title" | "section-text" | "link"
        content : string
        link    : string
        updated_on  : string
        lesson_id   : number
        student_sub : string
        teacher_sub : string
        order   : number
        theme   : string
      }
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
    profile_picture:string
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

  type teachers_scheduled_absences = {
    id:number
    date:string
    teacher_sub:string
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
    skype_id:string
    current_language:"JP",
    current_book:number
    push_token:string
    push_consent_message:0|1
    push_consent_promo:0|1
    push_concent_system:0|1
    stripe_customer_id:string
  }


  namespace multimedia {
    type video = {
      id:number
      url:string
      label:string
    }
  }
}
