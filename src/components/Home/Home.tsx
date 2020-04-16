import React, {Fragment, useContext, useEffect} from 'react';
import AppLayout from '../../layouts/AppLayout';
import Teams from '../../stores/Teams';
import {observer} from 'mobx-react-lite';
import {TeamForm} from '../TeamForm';

const Home = observer(() => {
    const {topTeams, getTeams} = useContext(Teams);

    useEffect(() => {
        getTeams();
    }, []);

    return (
        <AppLayout>
            <Fragment>
                <TeamForm />
                <div>
                    <div>
                        <span>Team</span>
                        <span>Clicks</span>
                    </div>
                    {topTeams.map((team, index) => (
                        <div key={index}>
                            <span>{team.order}</span>
                            <span>{team.team}</span>
                            <span>{team.clicks}</span>
                        </div>
                    ))}
                </div>
            </Fragment>
        </AppLayout>
    );
});

export default Home;