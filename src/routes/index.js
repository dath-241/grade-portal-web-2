import StudentLayout from '../components/Layout/StudentLayout/StudentLayout';
import DefaultLayout from '../components/Layout/Layout';
import LandingPage from '../pages/LandingPage/LandingPage';
import HomePage from '../pages/StudentPages/HomePage';
import GradeInfo from '../pages/StudentPages/GradeInfo';
import Login from '../pages/LoginPages/Login';
import AdminLogin from '../pages/LoginPages/AdminLogin';
import UserLogin from '../pages/LoginPages/UserLogin';
import TeacherHomePage from '../pages/TeacherPages/HomePage'
import TeacherCourseInfo from '../pages/TeacherPages/CourseInfo'
import TeacherGradeInfo from '../pages/TeacherPages/GradeInfo'
import TeacherCoursePage from '../pages/TeacherPages/CoursePage'
import AdminHomePage from '../pages/AdminPages/HomePage'
import AdminCourseInfo from '../pages/AdminPages/CourseInfo'
import AdminGradeInfo from '../pages/AdminPages/GradeInfo'
import AdminCoursePage from '../pages/AdminPages/CoursePage'
import GradeInput from '../pages/TeacherPages/GradeInput'
const routes = [
    {
        path: '/',
        page: LandingPage,
        layout: DefaultLayout,
    },
    {
        path: '/home',
        page: HomePage,
        layout: StudentLayout,
    },
    {
        path: '/gradeinfo/:id',
        page: GradeInfo,
        layout: StudentLayout,
    },
     {
        path: '/gradeinfo',
        page: GradeInfo,
        layout: StudentLayout,
    },
    {
        path: '/admin/home',
        page: AdminHomePage,
    },
    {
        path: '/admin/course',
        page: AdminCoursePage,
    },
    {
        path: 'admin/course/:id/info',
        page: AdminCourseInfo,
    },
    {
        path: 'admin/course/:id/grade',
        page: AdminGradeInfo,
    },
    {
        path: '/teacher/home',
        page: TeacherHomePage,
    },
    {
        path: '/teacher/course',
        page: TeacherCoursePage,
    },
    {
        path: 'teacher/course/:id/info',
        page: TeacherCourseInfo,
    },
    {
        path: 'teacher/gradeinfo',
        page: TeacherGradeInfo,
    },
    {
        path: 'teacher/gradeinput',
        page: GradeInput,
        layout: StudentLayout,
    },
    {
        path: '/login',
        page: Login,
        layout: DefaultLayout,
    },
    {
        path: '/login/user',
        page: UserLogin,
    },
    {
        path: '/login/admin',
        page: AdminLogin,
    },

];
export default routes;
