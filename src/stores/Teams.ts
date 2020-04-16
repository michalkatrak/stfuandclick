import {createContext} from 'react';
import {action, observable, computed} from 'mobx';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import {v4} from 'uuid';
import {Team} from '../types'

interface ClickData {
    team: string,
    session: string,
}

class Teams {
    @observable myTeam: string = '';
    @observable myScore: number = 0;
    @observable myTeamScore: number = 0;
    @observable teams: Team[] = [];
    @observable sessionId: string = '';

    @action
    private requestGetTeams = async (): Promise<Team[]> => {
        try {
            const response: AxiosResponse = await Axios.request({
                url: 'https://klikuj.herokuapp.com/api/v1/leaderboard',
                method: 'get',
            });

            return response.data;
        } catch (err) {
            console.error(err);
            return [];
        }
    };

    @action
    private requestSendClick = async (data: ClickData) => {
        try {
            const response: AxiosResponse = await Axios.request({
                url: 'https://klikuj.herokuapp.com/api/v1/klik',
                method: 'post',
                data,
            });

            return response.data;
        } catch (err) {
            console.error(err);
            return [];
        }
    };

    @action
    public click = async (): Promise<void> => {
        if (!this.myTeam || !this.sessionId) {
            console.error('No team or session initialized.');
            return;
        }
        const data = {
            team: this.myTeam,
            session: this.sessionId,
        };
        const {your_clicks, team_clicks} = await this.requestSendClick(data);
        this.myScore = your_clicks;
        this.myTeamScore = team_clicks;

        this.getTeams();
    //     const myTeam = this.teams.find(team => team.team === this.myTeam);
    //     if (myTeam) {
    //         myTeam.clicks = this.myTeamScore;
    //     }
    };

    @action
    public setTeam = (name: string): void => {
        this.myTeam = name;
    };

    @action
    public startSession = (): void => {
        this.sessionId = v4();
    };

    @action
    public getTeams = async (): Promise<void> => {
        this.teams = await this.requestGetTeams();
    };

    @computed
    get topTeams(): Team[] {
        return this.teams.slice(0, 10);
    };

    @computed
    get teamsAround(): Team[] {
        const myTeam = this.teams.find(team => team.team === this.myTeam);
        if (!myTeam) {
            return [];
        }

        const index = this.teams.indexOf(myTeam);
        if (index >= 4) {
            return this.teams.slice(index - 4, index + 5);
        }

        return this.teams.slice(0, 9);
    };
}

const teamsStore: Teams = new Teams();

export default createContext(teamsStore);