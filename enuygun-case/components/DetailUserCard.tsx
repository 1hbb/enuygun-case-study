import Image from "next/image"
import { HomeIcon, MailIcon, PhoneIcon } from "../styles/Icons"
import { Employee } from "../types/Employe"


export const DetailUserCard = ({ employeeInfo }: { employeeInfo: Employee }) => {
    return (
        <div className={"employee-detail-container-box"}>
            <div className="employee-detail">
                <Image src={employeeInfo.photo} alt="User Photo" width={200} height={200} />
                <h2 className={"employee-detail__employee-header"}>
                    {employeeInfo?.firstName}
                </h2>
                <p className={`employee-detail__employee-content`}>
                    <span>
                        {employeeInfo?.job}
                    </span>
                </p>
            </div>

            <div className="employee-detail__content-right"
            >

                <div>
                    <HomeIcon size={22} />
                    <a href="#">{employeeInfo?.address}</a>
                </div>

                <div className={"employee-detail__content-right__info"}>
                    <PhoneIcon size={18} />
                    <span>
                        Tel: {employeeInfo?.phone}
                    </span>
                </div>

                <div className={"employee-detail__content-right__info"}>
                    <MailIcon size={18} />
                    <span>
                        Email: {employeeInfo?.email}
                    </span>
                </div>

                <div>
                    Vote Count: {employeeInfo?.upvote}
                </div>

            </div>
        </div>
    )
}