rdeclare module DB {
  namespace app {
    type header = {
      id:number
      action :string
      icon :string
      color :string
      title :string
      subtitle :string
      link_url :string
      video_url :string
      hidden:number
    }
  }
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
      id:number
      lesson_id:number
      book_id:number
      title:string
      description:string
      student_sub:string
      status:"requires-marking" | "marked" | "archived"
    }
    type media = {
      id:number
      key:string
      entry_id:number
      student_sub:string
      order:number
    }
  }
  namespace knowledge_test {
    type feedback = {
      feedback_id:number
      section:string
      message:string
      lesson_id:number
      url_link:string
      url_label:string
    }
    type option = {
      option_id:number
      question_id:number
      text:string
      lesson_id:number
    }
    type question = {
      question_id:number
      answer:number
      question_type:"word-match"|"gap-fill"|"audio-match"|"image-match",
      sentence?:string
      audio_file?:string
      image_file?:string

      lesson_id:number
      feedback_id:number

      visible:number
      group:string
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
    lesson_chapter:string
    lesson_label:string
    lesson_description:string
    lesson_language:string
    grammar_count:number
    vocab_count:number
    self_study_duration:string
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
      log_status    : "none" | "draft" | "complete"
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
      teacher_sub:string
      booking_id:number
      created_on:string
      lesson_id:number
      listening:string
      speaking:string
      reading:string
      lesson_chapter_complete:boolean
      teachers_comments:string
    }

    type material = {
      id:number
      lesson_id:number
      title:string
      description:string
      category:string
      icon:string
      action:string

      link_url:string
    }
  }

  namespace msg {
    type message = {
      message_id:number
      thread_id:number
      message:string
      link_label?:string
      link_url?:string
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
