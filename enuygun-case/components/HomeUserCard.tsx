import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { incrementVote } from '../slices/userSlice';
import { AppDispatch } from '../store/store';
import { LikeIcon } from '../styles/Icons';
import { Employee } from '../types/Employe';


export const HomeUserCard = ({ employee }: { employee: Employee }) => {


    const dispatch = useDispatch<AppDispatch>();

    const increment = (id: string) => {
        dispatch(incrementVote({ data: id }))
    }

    return (
        <div
            key={employee.id}
            className="employee-container__employee"
        >
            <Link href={`/detail/${employee.id}`}>
                <Image src={employee.photo} alt="User Photo" width={200} height={200} />
            </Link>
            <h2 className={"employee-container__employee-header"}>
                {employee.firstName}
            </h2>
            <p className={`employee-container__employee-content`}>
                {employee.job}
            </p>
            <div onClick={() => increment(employee.id)} className="employee-container__employee-like">
                <button>
                    <LikeIcon size={32} />
                </button>
                <span>
                    {employee.upvote}
                </span>
            </div>
        </div>
    )
}