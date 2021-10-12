import Part from './Part.js'
const Content = ({info}) => {
    console.log(info)
    return (
        <div>
            {info.parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id} />) }
        </div>
    )
}

export default Content