﻿import Button from "../../components/Button/Button";
import TeacherGradeSearch from "../../components/GradeSearch/TeacherGradeSearch";
import HallOfFame from "../../components/HallOfFame/HallOfFame";



function TeacherGradeInfo() {
   
  
  return (
    <div className="mt-40 w-full px-9">
      <div className="text-[5rem] py-4 px-20 text-center">Tra cứu điểm</div>
      <div className="flex gap-8">
        <div className="w-2/3">
          <TeacherGradeSearch/>
        </div>
        <div className="w-1/3">
          <HallOfFame />
        </div>
      </div>

      <div className="flex gap-8 justify-center my-7">
        <Button text="Thông tin lớp học"/>
        <Button text="Gửi phản hồi" />
      </div>
    </div>
  )
}

export default TeacherGradeInfo;