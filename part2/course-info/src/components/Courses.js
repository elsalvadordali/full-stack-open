import Header from './Header'
import Content from './Content'
import Total from './Total'

const Courses = ({info}) => {


    const IndividualCourse = ({course}) => {
        console.log(course)
        let total = course.parts.reduce((total, exercises) => exercises.exercises + total, 0)
        return (
            <>
                <Header name={course.name} />
                <Content info={course} />
                <Total info={total} />
            </>
        )
    }
    console.log(info )
    return info.map(course => <IndividualCourse course={course} key={course.id}/>)

}

export default Courses

