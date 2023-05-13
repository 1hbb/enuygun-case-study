import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Employee, UserState } from '../../types/Employe';
import { useRouter } from "next/router";
import { DetailUserCard } from "../../components/DetailUserCard";


export default function Detail() {

    const router = useRouter();
    const { id } = router.query;

    const { entities } = useSelector(
        (state: RootState) => state.user
    ) as UserState;


    const [employeeInfo, setEmployeeInfo] = useState<Employee>()


    useEffect(() => {
        entities.map((ent) => {
            if (ent.id === id) {
                setEmployeeInfo(ent)
            }
        })
    }, [entities, id])



    return (
        <main className="employee-detail-container">
            {employeeInfo && <DetailUserCard employeeInfo={employeeInfo} />}
        </main>
    )
}
