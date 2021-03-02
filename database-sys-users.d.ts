declare namespace DB {
  type user = {
    user_id?:number
    sub?:string
    contact_name?:string
    firstname?:string
    lastname?:string
    email?:string
    lastupdate?:string

    preferred_method_of_contact?:"skype"|"google_meet"|"zoom"
    users_method_of_contact_id?:string

    current_language?:string
    current_book?:string

    push_token?:string
    push_message_concent?:string
    push_promo_concent?:string
    push_system_concent?:string

    stripe_customer_id?:string
  }
}
