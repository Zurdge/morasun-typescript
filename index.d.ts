// declare namespace DB{
//   type book = {
//     book_id:number
//     book_initials:number
//     book_label:string
//     book_description:string
//     book_language:"JP"
//   }
//   namespace Checkout {
//     type product = {
//       product_id:number
//       price:number
//       product_type:string
//       label:string
//       description:string
//     }
//   }
//   type coursework_entry = {
//     coursework_id?:number
//     status?:"unknown" | "ready_for_marking" | "marked"
//     sub?:string
//     lesson_id?:number
//     updated_on?:string
//   }
//   type coursework_feedback = {
//     feedback_id?:number
//     coursework_id?:number
//     user_media_id?:number
//     feedback_order?:number
//     title?:string
//     message?:string
//     external_references?:string | Array<string>
//   }
//   type coursework_media = {
//     media_id?:number
//     coursework_id?:number
//     sub?:string
//     order?:number
//     s3_key?:string
//     lesson_id?:number
//     category?:"coursework"
//     created_on?:string
//   }
//   type user_media_extra_props = {
//     should_upload?:boolean
//     url?:string
//     uri?:string
//     base64?:string
//   }
//   type lesson = {
//     lesson_id:number
//     book_id:number
//     lesson_label:string
//     lesson_description:string
//     lesson_language:"JP"
//   }
//   type user = {
//     user_id?:number
//     sub?:string
//     contact_name?:string
//     firstname?:string
//     lastname?:string
//     email?:string
//     lastupdate?:string
//
//     preferred_method_of_contact?:"skype"|"google_meet"|"zoom"
//     users_method_of_contact_id?:string
//
//     current_language?:string
//     current_book?:string
//
//     push_token?:string
//     push_message_concent?:string
//     push_promo_concent?:string
//     push_system_concent?:string
//
//     stripe_customer_id?:string
//   }
// }
