import type { NextPage } from 'next'
import { gql } from "@apollo/client";
import { HomeProps, Employee, UserState } from '../types/Employe';
import client from '../apollo/apolloClient';
import Link from "next/link";
import { LikeIcon } from "../styles/Icons";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { incrementVote, setEntities } from "../slices/userSlice";
import React from "react";
import Image from 'next/image';

const Home: NextPage<HomeProps> = ({ data }) => {


  const { entities } = useSelector(
    (state: RootState) => state.user
  ) as UserState;

  const dispatch = useDispatch<AppDispatch>();

  const increment = (id: string) => {
    dispatch(incrementVote({ data: id }))
  }

  React.useEffect(() => {
    entities.length === 0 && dispatch(setEntities(data.employee.employees));
  }, [data, dispatch, entities]);

  return (
    <main className="main-container">
      <div className="main-container__header">
        <h1 className='main-container__header-title'>Enuygun Employee Of The Month</h1>
      </div>



      <div className="employee-container">
        {entities.map((employee => (
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
        )))}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        employee {
          employees {
            id
            firstName
            lastName
            address
            email
            upvote
            job
            photo
            job
            phone
          }
        }
      }
    `,
  });
  return {
    props: {
      data: data,
    },
  };
}

export default Home




