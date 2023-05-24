import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const data = {
    database: {
        professor: '신유현',
        subjectCode: '1'
    },
    webProgramming: {
        professor: '전혜경',
        subjectCode: '2'
    },
    operatingSystem: {
        professor: '백형부',
        subjectCode: '3'
    }
};

const Subject = () => {
    const params = useParams();
    const subject = data[params.subname];

    return (
        <div>
            <button>
                <Link to ="/Home">Home</Link>
            </button>
            {subject ? (
                <div>
                    <h2>{subject.professor}</h2>
                    <p>{subject.subjectCode}</p>
                </div>
            ) : (
                <p>존재하지 않는 과목입니다!</p>
            )}
        </div>
    )
}

export default Subject;