import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class AppService {
  myResponseToExcel(): string {
    const students = [
      {
        name: "talha.work101@gmail.com",
        age: 26,
        degree: "CS"
      },
      {
        name: "haseeb.uchiha@gmail.com",
        age: 25,
        degree: "SE"
      }
    ]
    const worksheet = XLSX.utils.json_to_sheet(students)
    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, worksheet, "students")

    XLSX.write(workbook, { bookType: 'xlsx', type: "buffer" })

    XLSX.write(workbook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workbook, "students.xlsx")

    return 'Done!';
  }
}
