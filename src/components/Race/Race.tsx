import React, {Fragment, useContext, useEffect} from 'react';
import {useParams} from 'react-router';
import {observer} from 'mobx-react-lite';
import AppLayout from '../../layouts/AppLayout';
import Teams from '../../stores/Teams';
import {Clicker} from '../Clicker';

interface RouteParams {
    team: string,
}

const Home = observer(() => {
    const {teamsAround, getTeams, startSession, click, setTeam} = useContext(Teams);
    const {team} = useParams<RouteParams>();

    useEffect(() => {
        setTeam(team);
        startSession();
        click();
        getTeams();
    }, []);

    return (
        <AppLayout>
            <Fragment>
                <Clicker />
                <div>
                    <div>
                        <span>Team</span>
                        <span>Clicks</span>
                    </div>
                    {teamsAround.map((team, index) => (
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