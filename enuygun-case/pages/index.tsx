import type { NextPage } from 'next'
import { gql } from "@apollo/client";
import { HomeProps, UserState } from '../types/Employe';
import client from '../apollo/apolloClient';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setEntities } from "../slices/userSlice";
import React from "react";
import { HomeUserCard } from '../components/HomeUserCard';

const Home: NextPage<HomeProps> = ({ data }) => {


    const { entities } = useSelector(
        (state: RootState) => state.user
    ) as UserState;

    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        entities.length === 0 && dispatch(setEntities(data.employee.employees));
    }, [data, dispatch, entities]);

    return (
        <main className="main-container">
            <div className="main-container__header">
                <h1 className='main-container__header-title'>Enuygun Employee Of The Month</h1>
            </div>
            <div className="employee-container">
                {entities.map((employee) => {
                    return (
                        <HomeUserCard key={employee.id} employee={employee} />
                    )
                })}
            </div>
        </main>
    )
}

export async function getStaticProps() {
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
