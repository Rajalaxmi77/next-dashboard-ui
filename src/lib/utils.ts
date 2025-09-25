import { auth } from "@clerk/nextjs/server";

const { userId,sessionClaims } = await auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const currentUserId = userId;


const CurrentWorkWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const startOfWeek = new Date(today);

    if (dayOfWeek === 0) { // Sunday
        startOfWeek.setDate(today.getDate() + 1); // Move to next Monday
    }
    if (dayOfWeek === 6) { // Saturday
        startOfWeek.setDate(today.getDate() + 2); // Move to next Monday
    }
    else{
        startOfWeek.setDate(today.getDate() - (dayOfWeek - 1)); // Move to Monday
    }
    startOfWeek.setHours(0, 0, 0, 0); // Set to start of the day

    
    return  startOfWeek ;
}

export const adjustScheduleToCurrentWeek = (
    lessons: { title: string; start: Date; end: Date }[]
  ): { title: string; start: Date; end: Date }[] =>{
    const  startOfWeek  = CurrentWorkWeek();

    return lessons.map((lesson) => {
      const lessonDayOfWeek = lesson.start.getDay(); // 0 (Sun) to 6 (Sat)  
      const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1; // Adjust so Monday is 0, Sunday is 6
  
      const adjustedStartDate = new Date(startOfWeek);

      adjustedStartDate.setDate(startOfWeek.getDate() + daysFromMonday);
        adjustedStartDate.setHours(
            lesson.start.getHours(),
            lesson.start.getMinutes(),
            lesson.start.getSeconds(),
        );
        const adjustedEndDate = new Date(adjustedStartDate);
        adjustedEndDate.setHours(
            lesson.end.getHours(),
            lesson.end.getMinutes(),
            lesson.end.getSeconds(),
        );
        return {
        title: lesson.title,
        start: adjustedStartDate,
        end: adjustedEndDate,
        }
  });
}