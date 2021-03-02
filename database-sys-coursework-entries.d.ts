declare namespace DB {
  type coursework_entry = {
    coursework_id?:number
    status?:"unknown" | "ready_for_marking" | "marked"
    sub?:string
    lesson_id?:number
    updated_on?:string
  }
}
