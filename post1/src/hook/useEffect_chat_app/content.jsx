
import { useEffect, useState } from 'react';
const lessons = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'js'
    }
]


function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handlenComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handlenComment)


        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handlenComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}

                    </li>
                ))}
            </ul>


        </div>
    )
}
export default Content