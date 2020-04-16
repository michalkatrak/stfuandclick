import React, {useState} from 'react';
import {useHistory} from 'react-router';

const TeamForm = () => {
    const history = useHistory();

    const [teamName, setTeamName] = useState<string>('');

    const onClick = () => {
        history.push(`/${teamName}`);
    };

    return (
        <div>
            <div>
                <label>Enter your team name.</label>
                <input type="text" value={teamName} onChange={(a) => setTeamName(a.target.value)} />
            </div>
            <button onClick={onClick}>Click!</button>
        </div>
    );
};

export default TeamForm;