import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './screens/HomePage'
import StudentForm from './screens/StudentForm'
import StudentList from './screens/StudentList'
import TeacherList from './screens/TeacherList'
import TeacherForm from './screens/TeacherForm'
import SubjectForm from './screens/SubjectForm'
import SubjectLists from './screens/SubjectList'
import SubjectList from './screens/SubjectList'
import SyllabusForm from './screens/SyllabusForm'
import SyllabusList from './screens/SyllabusList'
import ClassForm from './screens/ClassForm'
import ClassList from './screens/ClassList'
import FeeStructure from './screens/FeeStructure'
import FeeVoucher from './screens/FeeVoucher'
import SignUpPage from './screens/SignUpPage'
import LoginPage from './screens/LoginPage'
import ProtecRoute from './screens/ProtecRoute'
import AuthProtect from './screens/AuthProtect'
import FeeSubmission from './screens/FeeSubmission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<AuthProtect/>}>

        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Signup' element={<SignUpPage/>}/>
      </Route>

      <Route element={<ProtecRoute Layout={Layout}/>}>

        <Route path='/register-student' element={<StudentForm/>}/>
        <Route path='/student-list' element={<StudentList/>}/>

        <Route path='/register-teacher' element={<TeacherForm/>}/>
        <Route path='/teacher-list' element={<TeacherList/>}/>

        <Route path='/add-subject' element={<SubjectForm/>}/>
        <Route path='/subjects-list' element={<SubjectList/>}/>

        <Route path='/syllabus-form' element={<SyllabusForm/>}/>
        <Route path='/syllabus-list' element={<SyllabusList/>}/>

        
        <Route path='/class-form' element={<ClassForm/>}/>
        <Route path='/class-list' element={<ClassList/>}/>

        <Route path='/fee-structure' element={<FeeStructure/>}/>
        <Route path='/fee-voucher' element={<FeeVoucher/>}/>
        <Route path='/fee-submission' element={<FeeSubmission/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
